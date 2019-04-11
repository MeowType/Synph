import { ASyntax, ISyntax, BodyFunc, body_func_call } from ".";

export class Group extends ASyntax<Group> {
    items: ISyntax[]
    constructor(name: string, items: ISyntax[]) {
        super(name)
        this.items = items
    }
}
export function group(name: string, iitemstem: BodyFunc): Group
export function group(name: string, item: ISyntax, ...items: ISyntax[]): Group
export function group(name: string, ...items: ISyntax[]): Group
export function group(name: string, item: ISyntax | BodyFunc, ...items: ISyntax[]) {
    if (typeof item === 'function') {
        return new Group(name, body_func_call(item))
    } else {
        return new Group(name, [item, ...items])
    }
}