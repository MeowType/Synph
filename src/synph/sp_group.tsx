import { Group, check_need_loop } from "../synph";
import { div } from "./tag";
import React from "react";
import { SynphSyn } from "./sp_syn";

export function SynphGroup(props: { syn: Group } & div) {
    const Class = 'synph-group'
    const { syn, className, ...p } = props
    return check_need_loop(syn, syn.items.map(i => <section className='synph-group-item-box'>{SynphSyn(i)}</section>),
        items => <article className={className == null ? Class : `${className} ${Class}`} {...p}>
        <section className='synph-group-box synph-group-items-box'>
            <div className='synph-group-items'>
                {items}
            </div>
        </section>
    </article>)
}