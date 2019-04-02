export * from './range'
export * from './syntax'
import React from 'react'
import { ISyntax, Make } from './syntax';

export function Synph(props: {
    name: string,
    syntax: ISyntax[] | (() => IterableIterator<ISyntax>) | ((this: Make, ctx: Make) => void)
}) {
    return <div>{123}</div>
}