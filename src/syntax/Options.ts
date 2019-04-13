import { ASyntax, ISyntax, BodyFunc, body_func_call, unset } from ".";

export class Options extends ASyntax<Options> {
    items: ISyntax[]
    constructor(unset: unset, name: string, items: ISyntax[]) {
        super(unset, name)
        this.items = items
    }
}
export function option(unset: unset, item: ISyntax, ...items: ISyntax[]): Options
export function option(unset: unset, items: BodyFunc | ISyntax): Options
export function option(unset: unset, name: string, item: ISyntax, ...items: ISyntax[]): Options
export function option(unset: unset, name: string, items: BodyFunc | ISyntax): Options
export function option(unset: unset, ...items: any[]) {
    const [first] = items
    if (typeof first === 'string') {
        const [, item, ...otheritems] = items
        if (typeof item === 'function') {
            return new Options(unset, first, body_func_call(item as BodyFunc))
        } else {
            unset(item, ...otheritems)
            return new Options(unset, first, [item, ...otheritems])
        }
    } else {
        const [, ...otheritems] = items
        if (typeof first === 'function') {
            return new Options(unset, undefined, body_func_call(first as BodyFunc))
        } else {
            unset(first, ...otheritems)
            return new Options(unset, undefined, [first, ...otheritems])
        }
    }
}