export class Loop {
    private _min?: number
    private _to?: number
    constructor(min?: number, max?: number) {
        this.min = min
        this.max = max
    }
    set min(v: number) {
        if (v == null) return
        this._min = parseInt(v as any) as any
        if (isNaN(this._min)) this._min = 0 as any
    }
    set max(v: number) {
        if (v == null) return
        this._to = parseInt(v as any) as any
        if (isNaN(this._to)) this._to = 0 as any
    }
    get min(){
        return this._min
    }
    get max() {
        return this._to
    }
}