import { Loop, BodyFunc, body_func_call } from "."
import { uid } from 'uids'

export type ISyntax = ASyntax
export abstract class ASyntax {
    id: string
    name: string
    loopfor?: Loop
    middleItems?: ISyntax[]
    constructor(name: string) {
        this.name = name
        this.id = uid()
    }
    loop(range: '+' | '*' | '?'): this
    loop(range: Loop): this
    loop(from?: number, to?: number): this
    loop(from?: number | Loop | '+' | '*' | '?', to?: number) {
        if (from instanceof Loop) {
            this.loopfor = from
        } else {
            if (from == '+') {
                this.loopfor = new Loop(1)
            } else if (from == '*') {
                this.loopfor = new Loop(0)
            } else if (from == '?') {
                this.loopfor = new Loop(0, 1)
            } else {
                this.loopfor = new Loop(from, to)
            }
        }
        return this
    }
    middle(items: BodyFunc): this
    middle(item: ISyntax, ...items: ISyntax[]): this
    middle(item: ISyntax | BodyFunc, ...items: ISyntax[]) {
        if (this.middleItems == null) this.middleItems = []
        if (typeof item === 'function') {
            this.middleItems.push(...body_func_call(item))
        } else {
            this.middleItems.push(item, ...items)
        }
        return this
    }
}