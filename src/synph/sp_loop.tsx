import { ISyntax, Loop } from "../synph";
import React from "react";
import { div } from "./tag";
import { SynphSyn } from "./sp_syn";

export function check_need_loop(syn: ISyntax, items: JSX.Element[], child: (items: JSX.Element[]) => JSX.Element): JSX.Element
export function check_need_loop(syn: ISyntax, child: JSX.Element): JSX.Element
export function check_need_loop(syn: ISyntax, child: JSX.Element | JSX.Element[], childfn?: (items: JSX.Element[]) => JSX.Element) {
    if (syn.loopfor == null) {
        if (child instanceof Array) return childfn(child)
        else return child
    } else {
        if (child instanceof Array) return <SynphLoop syn={syn} items={child}></SynphLoop>
        else return <SynphLoop syn={syn}>{child}</SynphLoop>
    }
}

export function SynphLoop(props: { syn: ISyntax, items?: JSX.Element[] } & div) {
    const Class = 'synph-loop'
    const { syn, items, className, children, ...p } = props
    return <article className={className == null ? Class : `${className} ${Class}`} {...p}>
        <div className='synph-loop-content'>
            <section className='synph-loop-box synph-loop-items'>
                {
                    items == null ?
                        <div className='synph-loop-item'>{children}</div>
                        :
                        items.map(i => <div className='synph-loop-item'>{i}</div>)
                }
            </section>
            <section className='synph-loop-box synph-loop-middle-box'>
                <div className='synph-loop-middle'>
                    {syn.middleItems == null ? <></> : syn.middleItems.map(m =>
                        <section className='synph-loop-item-box'>{SynphSyn(m)}</section>)}
                </div>
            </section>
        </div>
        {/* {syn.range == null ? <></> : make_range(syn.range)} */}
    </article>
}

export function make_range(range: Loop) {
    console.log(range)
    let ret: JSX.Element
    if (range.min != null) {
        if (range.max != null && range.max >= range.min && range.max >= 0) { // from..to
            if (range.max == range.min || range.max == 0) { // x
                if (range.min < 2) {
                    ret = <></>
                } else {
                    ret = <code className='synph-range n'>
                        <span className='synph-range-value'>{range.min}</span>
                    </code>
                }
            } else { // from..to
                if (range.min < 1) {
                    if (range.max == 1) {
                        ret = <code className='synph-range 0..1'>
                            <span className='synph-range-from'>0</span>
                            <span></span>
                            <span className='synph-range-to'>1</span>
                        </code>
                    } else {
                        ret = <code className='synph-range 0..n'>
                            <span className='synph-range-from'>0</span>
                            <span></span>
                            <span className='synph-range-to'>{range.max}</span>
                        </code>
                    }
                } else {
                    ret = <code className='synph-range n..n'>
                        <span className='synph-range-from'>{range.min}</span>
                        <span></span>
                        <span className='synph-range-to'>{range.max}</span>
                    </code>
                }
            }
        } else { // from..
            if (range.min < 1) { // 0..  x+
                ret = <code className='synph-range 0..'>
                    <span className='synph-range-from'>0</span>
                </code>
            } else if (range.min == 1) { //1..
                ret = <code className='synph-range 1..'>
                    <span className='synph-range-from'>1</span>
                </code>
            } else {
                ret = <code className='synph-range n..'>
                    <span className='synph-range-from'>{range.min}</span>
                </code>
            }
        }
    } else if (range.max != null) { // ..to
        if (range.max < 1) {
            ret = <></>
        } else if (range.max == 1) {
            ret = <code className='synph-range 0..1'>
                <span className='synph-range-from'>0</span>
                <span></span>
                <span className='synph-range-to'>1</span>
            </code>
        } else {
            ret = <code className='synph-range 0..n'>
                <span className='synph-range-from'>0</span>
                <span></span>
                <span className='synph-range-to'>{range.max}</span>
            </code>
        }
    } else { // ..
        ret = <></>
    }
    return ret
}