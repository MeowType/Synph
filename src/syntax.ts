import { Loop } from './loop'
import { uid } from 'uids'

export type ISyntax = ASyntax
export abstract class ASyntax {
    id: string
    name: string
    loopfor?: Loop
    middleItems?: ISyntax[]
    constructor(name: string) {
        this.name = name
        this.id = uid()
    }
    loop(range: '+' | '*' | '?'): this
    loop(range: Loop): this
    loop(from?: number, to?: number): this
    loop(from?: number | Loop | '+' | '*' | '?', to?: number) {
        if (from instanceof Loop) {
            this.loopfor = from
        } else {
            if (from == '+') {
                this.loopfor = new Loop(1)
            } else if (from == '*') {
                this.loopfor = new Loop(0)
            } else if (from == '?') {
                this.loopfor = new Loop(0, 1)
            } else {
                this.loopfor = new Loop(from, to)
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
export class Syntax extends ASyntax { }
export class Lexical extends ASyntax {
    value: string
    constructor(name: string, value: string) {
        super(name)
        this.value = value
    }
}
export class Group extends ASyntax { 
    items: ISyntax[]
    constructor(name: string, items: ISyntax[]) {
        super(name)
        this.items = items
    }
}
export class Options extends ASyntax {
    items: ISyntax[]
    constructor(name: string, items: ISyntax[]) {
        super(name)
        this.items = items
    }
}


export function syntaxOf(name: string) {
    return new Syntax(name)
}
export function lexicalOf(name: string, value: string) {
    return new Lexical(name, value)
}
export function groupOf(name: string, iitemstem: BodyFunc): Group
export function groupOf(name: string, item: ISyntax, ...items: ISyntax[]): Group
export function groupOf(name: string, item: ISyntax | BodyFunc, ...items: ISyntax[]) {
    if (typeof item === 'function') {
        return new Group(name, body_func_call(item))
    } else {
        return new Group(name, [item, ...items])
    }
}
export function optionOf(name: string, items: BodyFunc): Options
export function optionOf(name: string, item: ISyntax, ...items: ISyntax[]): Options
export function optionOf(name: string, item: ISyntax | BodyFunc, ...items: ISyntax[]) {
    if (typeof item === 'function') {
        return new Options(name, body_func_call(item))
    } else {
        return new Options(name, [item, ...items])
    }
}

export function body_func_call(fn: BodyFunc, arr?: ISyntax[]) {
    if (arr == null) arr = []
    if (typeof fn !== 'function') return arr
    if (fn[Symbol.toStringTag] === 'GeneratorFunction') {
        arr.push(...(fn as any)())
    } else {
        const items = []
        const ctx = Maker(i => items.push(i))
        fn.call(ctx, ctx)
        arr.push(...items)
    }
    return arr
}

export type BodyFunc = (() => IterableIterator<ISyntax>) | ((this: Make, ctx: Make) => void)
export type Make = ReturnType<typeof Maker>
export const Maker = (push: (v: ASyntax) => void) => {
    const o = {
        syntaxOf, lexicalOf, groupOf, optionOf
    }
    for (const key in o) {
        const element = o[key]
        if (typeof element === 'function') {
            o[key] = function () {
                const r = element.apply(this, arguments)
                push(r)
                return r
            }
        }
    }
    return o
}