import { ASyntax, unset, Nullable} from ".";

export class Lexical extends ASyntax {
    value: string
    constructor(unset: unset, name: Nullable<string>, value: string) {
        super(unset, name)
        this.value = value
    }
}
export function lexical(unset: unset, value: string): Lexical
export function lexical(unset: unset, name: Nullable<string>, value: string): Lexical
export function lexical(unset: unset, name: Nullable<string>, value?: string) {
    if (value == null) {
        return new Lexical(unset, name, name!)
    }
    return new Lexical(unset, name, value)
}