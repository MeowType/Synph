import { Group, check_need_loop } from "../synph";
import { div } from "./tag";
import React from "react";
import { SynphSyn } from "./sp_syn";
import { getOn } from "./getOn";

export function SynphGroup(props: { syn: Group } & div) {
    const Class = 'synph-group'
    const { syn, className, ...p } = props
    const ons = getOn(syn)
    return check_need_loop(syn, syn.items.map(i => <section key={i.id} className='synph-group-item-box'>{SynphSyn(i)}</section>),
        items => <article className={className == null ? Class : `${className} ${Class}`} {...p}>
        <section className='synph-group-box synph-group-items-box' {...ons}>
            {React.createElement('div', { className: 'synph-group-items' }, ...items)}
        </section>
    </article>)
}