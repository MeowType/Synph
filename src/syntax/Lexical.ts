import { ASyntax, ASyntaxEvents, TheASyntax, unset} from ".";

export class Lexical extends ASyntax<Lexical> {
    value: string
    constructor(unset: unset, name: string, value: string) {
        super(unset, name)
        this.value = value
    }
}
export function lexical(unset: unset, value: string): Lexical
export function lexical(unset: unset, name: string, value: string): Lexical
export function lexical(unset: unset, name: string, value?: string) {
    if (value == null) {
        return new Lexical(unset, name, name)
    }
    return new Lexical(unset, name, value)
}