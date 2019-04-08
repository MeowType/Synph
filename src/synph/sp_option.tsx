import { Options, check_need_loop } from "../synph";
import { div } from "./tag";
import React from "react";
import { SynphSyn } from "./sp_syn";

export function SynphOption(props: { syn: Options } & div) {
    const Class = 'synph-option'
    const { syn, className, ...p } = props
    return check_need_loop(syn,
        [<span key='-1'></span>, ...syn.items.flatMap((i, index) =>
            [<section key={i.id} className='synph-option-item-box'>{SynphSyn(i)}</section>
                , <span key={index}></span>])],
        items => <article className={className == null ? Class : `${className} ${Class}`} {...p}>
        <section className='synph-option-box synph-option-items-box'>
            <div className='synph-option-items'>
                    {items}
            </div>
        </section>
    </article>)
}