import { ASyntax, ASyntaxEvents, TheASyntax } from ".";

export class Lexical extends ASyntax<Lexical> {
    value: string
    constructor(name: string, value: string) {
        super(name)
        this.value = value
    }
}
export function lexical(name: string, value: string) {
    return new Lexical(name, value)
}