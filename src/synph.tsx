export * from './range'
export * from './syntax'
import React from 'react'
import { ISyntax, BodyFunc } from './syntax';

export function Synph(props: {
    name: string,
    syntax: ISyntax[] | BodyFunc
}) {
    const { name, syntax } = props
    return <div className='synph'>
        <div>{name}</div>
        <div></div>
    </div>
}