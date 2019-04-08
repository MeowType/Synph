import { Options, check_need_loop } from "../synph";
import { div } from "./tag";
import React from "react";
import { SynphSyn } from "./sp_syn";

export function SynphOption(props: { syn: Options } & div) {
    const Class = 'synph-option'
    const { syn, className, ...p } = props
    return check_need_loop(syn,
        [<span></span>, ...syn.items.flatMap(i =>
            [<section className='synph-option-item-box'>{SynphSyn(i)}</section>, <span></span>])],
        items => <article className={className == null ? Class : `${className} ${Class}`} {...p}>
        <section className='synph-option-box synph-option-items-box'>
            <div className='synph-option-items'>
                {items}
            </div>
        </section>
    </article>)
}