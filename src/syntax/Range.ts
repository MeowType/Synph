import { ISyntax, ASyntax, unset} from ".";

export class Range extends ASyntax<Range> { 
    from: ISyntax
    to: ISyntax
    constructor(unset: unset, name: string, from: ISyntax, to: ISyntax) {
        super(unset, name)
        this.from = from
        this.to = to
    }
}
export function range(unset: unset, from: ISyntax, to: ISyntax): Range
export function range(unset: unset, name: string, from: ISyntax, to: ISyntax): Range
export function range(unset: unset, name: string | ISyntax, from: ISyntax, to?: ISyntax) {
    if (to == null) {
        unset(name as ISyntax, from)
        return new Range(unset, undefined, name as ISyntax, from)
    }
    unset(from, to)
    return new Range(unset, name as string, from, to)
}