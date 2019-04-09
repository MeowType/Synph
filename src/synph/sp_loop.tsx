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
        const range_tag = get_loop_range_tag(syn.loopfor)
        if (range_tag === 'n') {
            console.log(range_tag)
            if (syn.loopfor.min == 0) return <></>
            if (syn.loopfor.min == 1) return child instanceof Array ? childfn(child) : child
        }
        if (child instanceof Array) return <SynphLoop syn={syn} tag={range_tag} items={child}></SynphLoop>
        else return <SynphLoop tag={range_tag} syn={syn}>{child}</SynphLoop>
    }
}

export function SynphLoop(props: { syn: ISyntax, tag: loop_range_tag, items?: JSX.Element[] } & div) {
    const { syn, tag, items, className, children, ...p } = props
    const Class = `synph-loop${tag == null ? '' : ` ${tag}`}`
    
    return <article className={className == null ? Class : `${className} ${Class}`} {...p}>
        <div className='synph-loop-content'>
            <section className='synph-loop-box synph-loop-items'>
                {
                    items == null ?
                        <div className='synph-loop-item'>{children}</div>
                        :
                        items.map((i) => <div key={i.key} className='synph-loop-item'>{i}</div>)
                }
            </section>
            <section className='synph-loop-box synph-loop-middle-box'>
                <div className={`synph-loop-middle${tag == null ? '' : ` ${tag}`}`}>
                    {make_loop_range(syn.loopfor, tag)}
                    {syn.middleItems == null ? <></> : syn.middleItems.map(m =>
                        <section key={m.id} className='synph-loop-item-box'>{SynphSyn(m)}</section>)}
                </div>
            </section>
        </div>
        
    </article>
}

export type loop_range_tag = 'n' | '0..1' | '0..n' | 'n..n' | '0..' | '1..' | 'n..'
export function get_loop_range_tag(range?: Loop): loop_range_tag {
    if (range == null) return null
    let ret: loop_range_tag = null
    if (range.min != null) {
        if (range.max != null && range.max >= range.min && range.max >= 0) { // from..to
            if (range.max == range.min || range.max == 0) { // x
                ret = 'n'
            } else { // from..to
                if (range.min < 1) {
                    if (range.max == 1) {
                        ret = '0..1'
                    } else {
                        ret = '0..n'
                    }
                } else {
                    ret = 'n..n'
                }
            }
        } else { // from..
            if (range.min < 1) { // 0..  x+
                ret = '0..'
            } else if (range.min == 1) { //1..
                ret = '1..'
            } else {
                ret = 'n..'
            }
        }
    } else if (range.max != null) { // ..to
        if (range.max < 1) { // ..0
            ret = 'n'
            range.min = 0
        } else if (range.max == 1) {
            ret = '0..1'
        } else {
            ret = '0..n'
        }
    } else { // ..
        ret = null
    }
    return ret
}

export function make_loop_range(range: Loop, tag: loop_range_tag) {
    if (tag == null || range == null) return <></>
    if (tag == 'n') {
        return <code className={`synph-loop-range ${tag}`}>
            <span className='synph-loop-range-value'>{range.min}</span>
        </code>
    } else if (tag == '0..1') {
        return <code className={`synph-loop-range ${tag}`}>
            <span className='synph-loop-range-from'>0</span>
            <span></span>
            <span className='synph-loop-range-to'>1</span>
        </code>
    } else if (tag == '0..n') {
        return <code className={`synph-loop-range ${tag}`}>
            <span className='synph-loop-range-from'>0</span>
            <span></span>
            <span className='synph-loop-range-to'>{range.max}</span>
        </code>
    } else if (tag == 'n..n') {
        return <code className={`synph-loop-range ${tag}`}>
            <span className='synph-loop-range-from'>{range.min}</span>
            <span></span>
            <span className='synph-loop-range-to'>{range.max}</span>
        </code>
    } else if (tag == '0..') {
        return <code className={`synph-loop-range ${tag}`}>
            <span className='synph-loop-range-from'>0</span>
        </code>
    } else if (tag == '1..') {
        return <code className={`synph-loop-range ${tag}`}>
            <span className='synph-loop-range-from'>1</span>
        </code>
    } else {
        return <code className={`synph-loop-range ${tag}`}>
            <span className='synph-loop-range-from'>{range.min}</span>
        </code>
    }
}