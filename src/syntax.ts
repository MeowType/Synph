import { Range, rangeOf } from './range'

export type ISyntax = ASyntax
export abstract class ASyntax {
    name: string
    range?: Range<any, any>
    constructor(name: string) {
        this.name = name
    }
    set_range(range: Range<any, any>): this
    set_range(from?: number, to?: number): this
    set_range(from?: number | Range<any, any>, to?: number) {
        if (from instanceof Range) {
            this.range = from
        } else {
            this.range = rangeOf(from, to)
        }
        return this
    }
}
export class Syntax extends ASyntax { }
export class Lexical extends ASyntax {
    values: string[]
    constructor(name: string, values: string[]) {
        super(name)
        this.values = values
    }
}
export class Group extends ASyntax { 
    items: ISyntax[]
    constructor(name: string, items: ISyntax[]) {
        super(name)
        this.items = items
    }
}
export class Loop extends ASyntax {
    body: ISyntax
    middle?: ISyntax
    constructor(name: string, body: ISyntax, middle?: ISyntax) {
        super(name)
        this.body = body
        this.middle = middle
    }
}


export function syntaxOf(name: string) {
    return new Syntax(name)
}
export function lexicalOf(name: string, value: string): Lexical
export function lexicalOf(name: string, value: string, ...values: string[]): Lexical
export function lexicalOf(name: string, ...values: string[]) {
    return new Lexical(name, values)
}
export function groupOf(name: string, item: (ctx: Make) => void): Group
export function groupOf(name: string, item: (this: Make, ctx: Make) => void): Group
export function groupOf(name: string, item: () => IterableIterator<ISyntax>): Group
export function groupOf(name: string, item: ISyntax, ...items: ISyntax[]): Group
export function groupOf(name: string, item: ISyntax | BodyFunc, ...items: ISyntax[]) {
    if (typeof item === 'function') {
        if (item[Symbol.toStringTag] === 'GeneratorFunction') {
            return new Group(name, [...(item as any)()])
        } else {
            const items = []
            const ctx = Maker(items.push)
            item.call(ctx, ctx)
            return new Group(name, items)
        }
        
    } else {
        return new Group(name, [item, ...items])
    }
}
export function loopOf(name: string, body: ISyntax | BodyFunc, middle?: ISyntax | BodyFunc) {
    const b = body instanceof ASyntax ? body : groupOf(null, body)
    const m = middle instanceof ASyntax ? middle : groupOf(null, middle)
    return new Loop(name, b, m)
}

export type BodyFunc = (() => IterableIterator<ISyntax>) | ((this: Make, ctx: Make) => void)
export type Make = ReturnType<typeof Maker>
export const Maker = (push: (v: ASyntax) => void) => {
    const o = {
        syntaxOf, lexicalOf, groupOf, loopOf
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