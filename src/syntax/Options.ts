import { ASyntax, ISyntax, BodyFunc, body_func_call } from ".";

export class Options extends ASyntax<Options> {
    items: ISyntax[]
    constructor(name: string, items: ISyntax[]) {
        super(name)
        this.items = items
    }
}
export function option(name: string, items: BodyFunc): Options
export function option(name: string, item: ISyntax, ...items: ISyntax[]): Options
export function option(name: string, item: ISyntax | BodyFunc, ...items: ISyntax[]) {
    if (typeof item === 'function') {
        return new Options(name, body_func_call(item))
    } else {
        return new Options(name, [item, ...items])
    }
}