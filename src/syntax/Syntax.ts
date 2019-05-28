import { ASyntax, unset, Nullable } from ".";

export class Syntax extends ASyntax { }
export function syntax(unset: unset, name: Nullable<string>): Syntax {
    return new Syntax(unset, name)
}