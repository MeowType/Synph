import { Range, check_need_loop, SynphSyn } from "../synph";
import { div } from "./tag";
import React from "react";

export function SynphRange(props: { syn: Range } & div) {
    const Class = 'synph-range'
    const { syn, className, ...p } = props
    return check_need_loop(syn,
        [<section key='-1' className='synph-range-item-box'><span></span></section>, ...[syn.from, syn.to].flatMap((i, index) =>
            [<section key={i.id} className='synph-range-item-box'>{SynphSyn(i)}</section>
                , <section key={index} className='synph-range-item-box'><span></span></section>])],
        items => <article className={className == null ? Class : `${className} ${Class}`} {...p}>
        <section className='synph-range-box synph-range-items-box'>
            <div className='synph-range-items'>
                {...items}
            </div>
        </section>
    </article>)
}