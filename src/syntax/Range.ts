import { ISyntax, ASyntax, unset, Nullable} from ".";

export class Range extends ASyntax { 
    from: ISyntax
    to: ISyntax
    constructor(unset: unset, name: Nullable<string>, from: ISyntax, to: ISyntax) {
        super(unset, name)
        this.from = from
        this.to = to
    }
}
export function range(unset: unset, from: ISyntax, to: ISyntax): Range
export function range(unset: unset, name: Nullable<string>, from: ISyntax, to: ISyntax): Range
export function range(unset: unset, name: Nullable<string> | ISyntax, from: ISyntax, to?: ISyntax) {
    if (to == null) {
        unset(name as ISyntax, from)
        return new Range(unset, undefined, name as ISyntax, from)
    }
    unset(from, to)
    return new Range(unset, name as string, from, to)
}