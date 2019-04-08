import { ASyntax } from ".";

export class Syntax extends ASyntax { }
export function syntax(name: string) {
    return new Syntax(name)
}