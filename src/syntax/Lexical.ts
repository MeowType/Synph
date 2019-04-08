import { ASyntax } from ".";

export class Lexical extends ASyntax {
    value: string
    constructor(name: string, value: string) {
        super(name)
        this.value = value
    }
}
export function lexical(name: string, value: string) {
    return new Lexical(name, value)
}