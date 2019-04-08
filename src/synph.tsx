export * from './syntax'
import React, { useState } from 'react'
import { ISyntax, BodyFunc, body_func_call } from './syntax';
import { SynphSyn } from './synph/sp_syn';
export * from './synph/sp_syn'
export * from './synph/sp_syntax'
export * from './synph/sp_lexical'
export * from './synph/sp_group'
export * from './synph/sp_option'
export * from './synph/sp_loop'

export function SynphItem(props: {
    name: string,
    syntax: ISyntax[] | BodyFunc,
    stretch?: boolean
}) {
    const { name, syntax, stretch } = props
    const [arr] = useState(() => syntax instanceof Array ? syntax : body_func_call(syntax))
    console.log(arr)

    return <section className={`synph-item${stretch ? ' stretch' : ''}`}>
        <header className='synph-item-name'>{name}</header>
        <div className='synph-item-content'>{arr.map(s => SynphSyn(s))}</div>
    </section>
}

function a() { }

function b() {
    a()
}
b.prototype = Object.create(a.prototype)