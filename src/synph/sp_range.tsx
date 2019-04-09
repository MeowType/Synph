import { Range, check_need_loop, SynphSyn } from "../synph";
import { div } from "./tag";
import React from "react";

export function SynphRange(props: { syn: Range } & div) {
    const Class = 'synph-range'
    const { syn, className, ...p } = props
    return check_need_loop(syn,
        [<span key='-1'></span>, ...[syn.from, syn.to].flatMap((i, index) =>
            [<section key={i.id} className='synph-range-item-box'>{SynphSyn(i)}</section>
                , <span key={index}></span>])],
        items => <article className={className == null ? Class : `${className} ${Class}`} {...p}>
        <section className='synph-range-box synph-range-items-box'>
            <div className='synph-range-items'>
                {...items}
            </div>
        </section>
    </article>)
}