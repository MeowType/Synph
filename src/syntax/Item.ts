import { ASyntax, ISyntax, BodyFunc, body_func_call, unset } from ".";

export class Item extends ASyntax<Item> {
    items: ISyntax[]
    constructor(unset: unset, name: string, items: ISyntax[]) {
        super(unset, name)
        this.items = items
    }
}
export function item(unset: unset, name: string, ...items: ISyntax[]): Item
export function item(unset: unset, name: string, items: BodyFunc | ISyntax): Item
export function item(unset: unset, name: string, ...items: any[]) {
    const [, item, ...otheritems] = items
    if (typeof item === 'function') {
        return new Item(unset, name, body_func_call(item as BodyFunc))
    } else {
        unset(item, ...otheritems)
        return new Item(unset, name, [item, ...otheritems])
    }
}