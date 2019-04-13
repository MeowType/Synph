import { ASyntax, ISyntax, BodyFunc, body_func_call, unset } from ".";

export class Group extends ASyntax<Group> {
    items: ISyntax[]
    constructor(unset: unset, name: string, items: ISyntax[]) {
        super(unset, name)
        this.items = items
    }
}
export function group(unset: unset, ...items: ISyntax[]): Group
export function group(unset: unset, items: BodyFunc | ISyntax): Group
export function group(unset: unset, name: string, ...items: ISyntax[]): Group
export function group(unset: unset, name: string, items: BodyFunc | ISyntax): Group
export function group(unset: unset, ...items: any[]) {
    const [first] = items
    if (typeof first === 'string') {
        const [, item, ...otheritems] = items
        if (typeof item === 'function') {
            return new Group(unset, first, body_func_call(item as BodyFunc))
        } else {
            unset(item, ...otheritems)
            return new Group(unset, first, [item, ...otheritems])
        }
    } else {
        const [, ...otheritems] = items
        if (typeof first === 'function') {
            return new Group(unset, undefined, body_func_call(first as BodyFunc))
        } else {
            unset(first, ...otheritems)
            return new Group(unset, undefined, [first, ...otheritems])
        }
    }
    
}