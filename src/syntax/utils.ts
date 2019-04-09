import { ISyntax, ASyntax, syntax, lexical, group, option, range } from ".";

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
        syntax, lexical, group, option, range
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