export * from './range'
export * from './syntax'
import React, { useState } from 'react'
import { Range } from './range'
import { ISyntax, BodyFunc, body_func_call, Lexical, Loop, Syntax } from './syntax';

export function SynphItem(props: {
    name: string,
    syntax: ISyntax[] | BodyFunc
}) {
    const { name, syntax } = props
    const [arr] = useState(() => syntax instanceof Array ? syntax : body_func_call(syntax))
    console.log(arr)

    return <section className='synph-item'>
        <header className='synph-item-name'>{name}</header>
        <div className='synph-item-content'>{arr.map(s => SynphSyn(s))}</div>
    </section>
}

export function SynphSyn(syn: ISyntax) {
    function make(Fn: (props: { syn: ISyntax } & tag) => JSX.Element) {
        return <Fn className='synph-syn' key={syn.id} syn={syn}></Fn>
    }
    if (syn instanceof Lexical) {
        return make(SynphLexical)
    } else if (syn instanceof Loop) {
        return make(SynphLoop)
    } else if (syn instanceof Syntax) {
        return make(SynphSyntax)
    }
    return <></>
}

type tag = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
type div = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function SynphSyntax(props: { syn: Syntax } & div) {
    const Class = 'synph-syntax'
    const { syn, className, ...p } = props
    return <article className={className == null ? Class : `${className} ${Class}`} {...p}>
        <code>{syn.name}</code>
    </article>
}

export function SynphLexical(props: { syn: Lexical } & div) {
    const Class = 'synph-lexical'
    const { syn, className, ...p } = props
    return <article className={className == null ? Class : `${className} ${Class}`} {...p}>
        {syn.values.map(v => <code key={v}>{v}</code>)}
    </article>
}

export function SynphLoop(props: { syn: Loop } & div) {
    const Class = 'synph-loop'
    const { syn, className, ...p } = props
    return <article className={className == null ? Class : `${className} ${Class}`} {...p}>
        <div className='synph-loop-content'>
            <section className='synph-loop-items'>{syn.items.map(i => SynphSyn(i))}</section>
            {syn.middle == null ? <></> : <section className='synph-loop-middle'>{syn.middle.map(m => SynphSyn(m))}</section>}
        </div>
        {syn.range == null ? <></> : make_range(syn.range)}
    </article>
}


export function make_range(range: Range<number, number>) {
    console.log(range)
    let ret: JSX.Element
    if (range.from != null) {
        if (range.to != null && range.to >= range.from && range.to >= 0) { // from..to
            if (range.to == range.from || range.to == 0) { // x
                if (range.from < 2) {
                    ret = <></>
                } else {
                    ret = <code className='synph-range n'>
                        <span className='synph-range-value'>{range.from}</span>
                    </code>
                }
            } else { // from..to
                if (range.from < 1) {
                    if (range.to == 1) {
                        ret = <code className='synph-range 0--1'>
                            <span className='synph-range-from'>0</span>
                            <span></span>
                            <span className='synph-range-to'>1</span>
                        </code>
                    } else {
                        ret = <code className='synph-range 0--n'>
                            <span className='synph-range-from'>0</span>
                            <span></span>
                            <span className='synph-range-to'>{range.to}</span>
                        </code>
                    }
                } else {
                    ret = <code className='synph-range n--n'>
                        <span className='synph-range-from'>{range.from}</span>
                        <span></span>
                        <span className='synph-range-to'>{range.to}</span>
                    </code>
                }
            }
        } else { // from..
            if (range.from < 1) { // 0..  x+
                ret = <code className='synph-range 0--'>
                    <span className='synph-range-from'>0</span>
                </code>
            } else if(range.from == 1){ //1..
                ret = <code className='synph-range 1--'>
                    <span className='synph-range-from'>1</span>
                </code>
            } else {
                ret = <code className='synph-range n--'>
                    <span className='synph-range-from'>{range.from}</span>
                </code>
            }
        }
    } else if (range.to != null) { // ..to
        if (range.to < 1) {
            ret = <></>
        } else if (range.to == 1) {
            ret = <code className='synph-range 0--1'>
                <span className='synph-range-from'>0</span>
                <span></span>
                <span className='synph-range-to'>1</span>
            </code>
        } else {
            ret = <code className='synph-range 0--n'>
                <span className='synph-range-from'>0</span>
                <span></span>
                <span className='synph-range-to'>{range.to}</span>
            </code>
        }
    } else { // ..
        ret = <></>
    }
    return ret
}