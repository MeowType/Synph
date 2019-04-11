import { Loop, BodyFunc, body_func_call } from "."
import { uid } from 'uids'
import { EventHandler } from "react";

export type GetEventsKey<A extends React.DOMAttributes<HTMLElement>> = { [K in keyof A]: A[K] extends EventHandler<any> ? K : never }//EventHandler<HTMLElement>
export type EventsKey = GetEventsKey<React.DOMAttributes<HTMLElement>>[keyof GetEventsKey<React.DOMAttributes<HTMLElement>>]
export type GetEvents<A extends React.DOMAttributes<HTMLElement>, K extends keyof A, S> = { [P in K]: (cb: A[P]) => S }
export type Events<S> = GetEvents<React.DOMAttributes<HTMLElement>, EventsKey, S>
export type ASyntaxEvents<S> = { [K in keyof Events<S>]: Events<S>[K] & { eventlist: Set<React.DOMAttributes<HTMLElement>[EventsKey]> } }
export type GetCallEvents<A extends React.DOMAttributes<HTMLElement>, K extends keyof A> = { [P in K]: A[P] }
export type CallEvents = GetCallEvents<React.DOMAttributes<HTMLElement>, EventsKey>

export type ISyntax = TheASyntax
export interface TheASyntax extends ASyntaxEvents<TheASyntax> { }
export abstract class TheASyntax {
    id: string
    name: string
    loopfor?: Loop
    middleItems?: ISyntax[]
    constructor(name: string) {
        this.name = name
        this.id = uid()
    }
    loop(strings: TemplateStringsArray, form?: number, to?: number): this
    loop(range: '+' | '*' | '?'): this
    loop(range: string): this
    loop(range: Loop): this
    loop(from?: number, to?: number): this
    loop(from?: number | Loop | '+' | '*' | '?' | string | TemplateStringsArray, to?: number, tto?: number) {
        function check_str(self: ISyntax, str: string) {
            if (typeof str !== 'string') return false
            if (str === '..') {
                self.loopfor = new Loop(0, 0)
                console.warn(new SyntaxError(`Should not use: '..', use '0..0'`))
            } if (str === '+') {
                self.loopfor = new Loop(1)
            } else if (str === '*') {
                self.loopfor = new Loop(0)
            } else if (str === '?') {
                self.loopfor = new Loop(0, 1)
            } else {    // 'aaa' || aaa..' || '..aaa' || 'aaa..aaa'
                const sp = str.split('..')
                if (sp.length === 1) {  // 'aaa'
                    const v = parseInt(sp[0])
                    if (isNaN(v)) {     // 'NaN'
                        self.loopfor = new Loop(0, 0)
                        console.error(new SyntaxError(`Illegal situation: 'NaN'`))
                    } else {    // 'n'
                        self.loopfor = new Loop(v, v)
                    }
                } else {    // 'aaa..' || '..aaa' || 'aaa..aaa'
                    if (sp[0] === '') {     // '..aaa'
                        const v = parseInt(sp[1])
                        if (isNaN(v)) {     // '..NaN'
                            self.loopfor = new Loop(0, 0)
                            console.error(new SyntaxError(`Illegal situation: '..NaN'`))
                        } else {    // '..n'
                            self.loopfor = new Loop(0, v)
                        }
                    } else if (sp[1] === '') {  // 'aaa..'
                        const v = parseInt(sp[0])
                        if (isNaN(v)) {     // 'NaN..'
                            self.loopfor = new Loop(0, 0)
                            console.error(new SyntaxError(`Illegal situation: 'NaN..'`))
                        } else {    // 'n..'
                            self.loopfor = new Loop(v)
                        }
                    } else {    // 'aaa..aaa'
                        let a = parseInt(sp[0])
                        let b = parseInt(sp[0])
                        let ae = 'n', be = 'n'
                        if (isNaN(a)) {
                            a = 0
                            ae= 'NaN'
                        }
                        if (isNaN(b)) {
                            b = 0
                            be = 'NaN'
                        }
                        self.loopfor = new Loop(a, b)
                        if (ae === 'NaN' || be == 'NaN') {
                            console.error(new SyntaxError(`Illegal situation: '${ae}..${be}'`))
                        }
                    }
                }
            }
            return true
        }
        if (from instanceof Array) {
            if (from.length === 1) {    // `xxx`
                check_str(this, from[0])
                return this
            } else if (from.length === 2) { // `xxx${n}xxx`
                if (from[0] === '' && from[1] === '') { // `${n}`
                    this.loopfor = new Loop(to, to)
                } else if (from[0] === '') {    // `${n}aaa`
                    if (from[1] === '..') {     // `${n}..`
                        this.loopfor = new Loop(to)
                    } else {
                        const v = parseInt(from[1])
                        if (isNaN(v)) {         // `${n}NaN`
                            if (from[1].indexOf('..') === 0) {  // `${n}..aaa`
                                const tv = parseInt(from[1].substr(2))  // aaa
                                if (isNaN(tv)) {    // `${n}..NaN`
                                    this.loopfor = new Loop(to, to)
                                    console.error(new SyntaxError(`Illegal situation: \`\${n}NaN\``))
                                } else {    // `${n}..n`
                                    this.loopfor = new Loop(to, tv)
                                }
                            } else {    // `${n}eee`
                                this.loopfor = new Loop(to, to)
                                console.error(new SyntaxError(`Illegal situation: \`\${n}aaa\``))
                            }
                        } else {     // `${n}n`
                            this.loopfor = new Loop(to, v)
                            console.warn(new SyntaxError(`Should not use: \`\${n}n\`, use \`\${n}..n\``))
                        }
                    }
                } else if (from[1] === '') {    // `aaa${n}`
                    if (from[0] === '..') {     // `..${n}`
                        this.loopfor = new Loop(0, to)
                    } else {
                        const v = parseInt(from[0])
                        if (isNaN(v)) {         // `NaN${n}`
                            if (from[0].lastIndexOf('..') + 2 === from[0].length) {  // `aaa..${n}`
                                const tv = parseInt(from[0].substr(0, from[0].lastIndexOf('..')))   // aaa
                                if (isNaN(tv)) {    // `NaN..${n}`
                                    this.loopfor = new Loop(to, to)
                                    console.error(new SyntaxError(`Illegal situation: \`NaN..\${n}\``))
                                } else {    // `n..${n}`
                                    this.loopfor = new Loop(tv, to)
                                }
                            } else {    // `eee${n}`
                                this.loopfor = new Loop(to, to)
                                console.error(new SyntaxError(`Illegal situation: \`aaa\${n}\``))
                            }
                        } else {     // `n${n}`
                            this.loopfor = new Loop(v, to)
                            console.warn(new SyntaxError(`Should not use: \`n\${n}\`, use \`n..\${n}\``))
                        }
                    }
                } else {    // `aaa${n}aaa`
                    this.loopfor = new Loop(to, to)
                    console.error(new SyntaxError(`Illegal situation: \`aaa\${n}aaa\``))
                }
            } else { // `xxx${n}xxx${n}xxx`
                let be = '', ae = ''
                if (from[0] !== '') {
                    be = 'aaa'
                }
                if (from[2] !== '') {
                    ae = 'aaa'
                }
                if (from[1] === '') { // `${n}${n}`
                    console.warn(new SyntaxError(`Should not use: \`${be}\${n}\${n}${ae}\`, use \`\${n}..\${n}\``))
                } else {
                    if (from[1] === '..') { // `${n}..${n}`
                        if (be === 'aaa' || ae === 'aaa') {
                            console.warn(new SyntaxError(`Should not use: \`${be}\${n}..\${n}${ae}\`, use \`\${n}..\${n}\``))
                        }
                    } else { // `${n}eee${n}`
                        console.error(new SyntaxError(`Illegal situation: \`${be}\${n}aaa\${n}${ae}\`, use \`\${n}..\${n}\``))
                    }
                }
                this.loopfor = new Loop(to, tto)
            }
        } else if (from instanceof Loop) {
            this.loopfor = from
        } else {
            if (!check_str(this, from as string)) {
                this.loopfor = new Loop(from as number, to)
            }
        }
        return this
    }
    middle(items: BodyFunc): this
    middle(item: ISyntax, ...items: ISyntax[]): this
    middle(item: ISyntax | BodyFunc, ...items: ISyntax[]) {
        if (this.middleItems == null) this.middleItems = []
        if (typeof item === 'function') {
            this.middleItems.push(...body_func_call(item))
        } else {
            this.middleItems.push(item, ...items)
        }
        return this
    }
}
export const ASyntax: typeof TheASyntax = new Proxy(TheASyntax, {
    construct(target, arg, newTarget) {
        return new Proxy<ISyntax>(Reflect.construct(target, arg, newTarget), {
            get(target, p, rec) {
                if (typeof p === 'string') {
                    if (p.substr(0, 2) === 'on') {
                        if (Reflect.has(target, p)) {
                            return Reflect.get(target, p, rec)
                        } else {
                            const eventlist = new Set<React.DOMAttributes<HTMLElement>[EventsKey]>()
                            function reg(cb: React.DOMAttributes<HTMLElement>[EventsKey]) {
                                eventlist.add(cb)
                                return rec
                            }
                            (reg as any).eventlist = eventlist
                            Reflect.set(target, p, reg, rec)
                            return reg
                        }
                    }
                }
                return Reflect.get(target, p, rec)
            }
        })
    }
})