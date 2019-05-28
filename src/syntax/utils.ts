import { ISyntax, syntax, lexical, group, option, range, item } from "./ref_all";

export type unset = (...v: ISyntax[]) => void
export function body_func_call(fn: BodyFunc, arr?: ISyntax[]) {
    if (arr == null) arr = []
    if (typeof fn !== 'function') return arr
    const unsetlist: Set<ISyntax> = new Set
    if ((fn as any)[Symbol.toStringTag] === 'GeneratorFunction') {
        arr.push(...(fn as any)())
    } else {
        const items: ISyntax[] = []
        const ctx = Maker(i => items.push(i), (...v: ISyntax[]) => v.forEach(v => unsetlist.add(v)));
        (fn as any).call(ctx, ctx)
        arr.push(...items)
    }
    return unsetlist.size == 0 ? arr : arr.filter(i => !unsetlist.delete(i))
}

export type otype = {
    syntax: typeof syntax,
    lexical: typeof lexical,
    group: typeof group,
    item: typeof item,
    option: typeof option,
    range: typeof range
}
export type BodyFunc = (() => IterableIterator<ISyntax>) | ((this: Make, ctx: Make) => void)
export type Make = RemoveParentUnsetObject<otype>
export function Maker(push: (v: ISyntax) => void, unset: unset): RemoveParentUnsetObject<otype> {
    const o: otype = {
        syntax, lexical, group, item, option, range
    }
    for (const key in o) {
        const element = (o as any)[key]
        if (typeof element === 'function') {
            (o as any)[key] = function () {
                const r = element.call(this, unset, ...arguments)
                push(r)
                return r
            }
        }
    }
    return o as any
}
export type Tail<F extends (head: any, ...tails: any[]) => any> = F extends (head: any, ...tails: infer T) => any ? T : any
export type TailFn<F extends (head: any, ...tails: any[]) => any> = (...args: Tail<F>) => ReturnType<F>

export type RemoveParentUnset<F> =
    F extends (unset: unset, ...tails: any[]) => any ? TailFn<F>: F
export type RemoveParentUnsetObject<O> = { [K in keyof O]: RemoveParentUnset<O[K]> }

export type Nullable<T> = T | null | undefined