export class Range<F extends number, T extends number> {
    private _from?: F
    private _to?: T
    constructor(from?: F, to?: T) {
        console.log(from, to)
        this.from = from
        this.to = to
    }
    set from(v: F) {
        if (v == null) return
        this._from = parseInt(v as any) as any
        if (isNaN(this._from)) this._from = 0 as any
    }
    set to(v: T) {
        if (v == null) return
        this._to = parseInt(v as any) as any
        if (isNaN(this._to)) this._to = 0 as any
    }
    get from(){
        return this._from
    }
    get to() {
        return this._to
    }
}
export function rangeOf<F extends number>(from?: F): Range<F, undefined>
export function rangeOf<T extends number>(from: undefined, to?: T): Range<undefined, T>
export function rangeOf<F extends number, T extends number>(from?: F, to?: T): Range<F, T>
export function rangeOf(from?: number, to?: number) {
    return new Range(from, to)
}