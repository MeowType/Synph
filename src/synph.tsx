export * from './range'
export * from './syntax'
import React from 'react'
import { ISyntax, BodyFunc, Group, Maker } from './syntax';

export function SynphItem(props: {
    name: string,
    syntax: ISyntax[] | BodyFunc
}) {
    const { name, syntax } = props
    const arr = syntax instanceof Array ? syntax : []
    if (typeof syntax === 'function') {
        if (syntax[Symbol.toStringTag] === 'GeneratorFunction') {
            arr.push(new Group(name, [...(syntax as any)()])) 
        } else {
            const items = []
            const ctx = Maker(items.push)
            syntax.call(ctx, ctx)
            arr.push(new Group(name, items))
        }
    }
    return <div className='synph'>
        <div>{name}</div>
        <div></div>
    </div>
}