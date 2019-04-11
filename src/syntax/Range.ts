import { ISyntax, ASyntax } from ".";

export class Range extends ASyntax<Range> { 
    from: ISyntax
    to: ISyntax
    constructor(name: string, from: ISyntax, to: ISyntax) {
        super(name)
        this.from = from
        this.to = to
    }
}
export function range(name: string, from: ISyntax, to: ISyntax) {
    return new Range(name, from, to)
}