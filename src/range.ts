export class Range<F extends number, T extends number> {
    from?: F
    to?: T
    constructor(from?: F, to?: T) {
        this.from = from
        this.to = to
    }
}
export function rangeOf<F extends number>(from?: F): Range<F, undefined>
export function rangeOf<T extends number>(from: undefined, to?: T): Range<undefined, T>
export function rangeOf<F extends number, T extends number>(from?: F, to?: T): Range<F, T>
export function rangeOf(from?: number, to?: number) {
    return new Range(from, to)
}