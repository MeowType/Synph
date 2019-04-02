export * from './range'
export * from './syntax'
import React from 'react'
import { ISyntax, Make } from './syntax';

export function Synph(props: {
    name: string,
    syntax: ISyntax[] | (() => IterableIterator<ISyntax>) | ((this: Make, ctx: Make) => void)
}) {
    const { name, syntax } = props
    return <div className='synph'>
        <div>{name}</div>
        <div></div>
    </div>
}