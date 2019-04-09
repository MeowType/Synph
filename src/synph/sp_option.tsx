import { Options, check_need_loop } from "../synph";
import { div } from "./tag";
import React from "react";
import { SynphSyn } from "./sp_syn";

export function SynphOption(props: { syn: Options } & div) {
    const Class = 'synph-option'
    const { syn, className, ...p } = props
    return check_need_loop(syn,
        [<section key='-1' className='synph-option-item-box'><span></span></section>, ...syn.items.flatMap((i, index) =>
            [<section key={i.id} className='synph-option-item-box'>{SynphSyn(i)}</section>
                , <section key={index} className='synph-option-item-box'><span></span></section>])],
        items => <article className={className == null ? Class : `${className} ${Class}`} {...p}>
        <section className='synph-option-box synph-option-items-box'>
            {React.createElement('div', { className: 'synph-option-items' }, ...items)}
        </section>
    </article>)
}