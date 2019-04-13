import { ASyntax, unset } from ".";

export class Syntax extends ASyntax<Syntax> { }
export function syntax(unset: unset, name: string): Syntax {
    return new Syntax(unset, name)
}