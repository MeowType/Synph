import { Item, check_need_loop, ISyntax, BodyFunc, body_func_call, group, CallEvents } from "../synph";
import { div } from "./tag";
import React, { useState } from 'react'
import { SynphSyn } from "./sp_syn";
import { getOn } from "./getOn";

export function SynphItem(props: ({
    name: string,
    syntax: ISyntax[] | BodyFunc,
} | {
    syntax: Item,
}) & { stretch?: boolean } & div) {
    const Class = 'synph-item'
    const { name, syntax, stretch, className, key, ...p } = props as {
        name?: string,
        syntax: ISyntax[] | BodyFunc | Item,
        stretch?: boolean
    } & div
    let syn = syntax
    let Name = name;
    let ons: CallEvents = {}
    let id = key
    if (syn instanceof Item) {
        Name = syn.name
        ons = getOn(syn)
        id = syn.id
        syn = syn.items
    }
    const [arr] = useState(() => syn instanceof Array ? syn : body_func_call(syn as any))
    console.log(arr)
    const content = arr.length <= 1 ? arr : [(group as any)(Name, ...arr)]

    return <section className={`${className == null ? Class : `${Class} ${className}`}${stretch ? ' stretch' : ''}`} key={id} {...p} {...ons}>
        <header className='synph-item-name'>{Name}</header>
        {React.createElement('div', { className: `synph-item-content` }, ...content.map(s => SynphSyn(s)))}
    </section>
}