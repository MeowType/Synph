export * from './range'
export * from './syntax'
import React, { useState } from 'react'
import { ISyntax, BodyFunc, body_func_call } from './syntax';

export function SynphItem(props: {
    name: string,
    syntax: ISyntax[] | BodyFunc
}) {
    const { name, syntax } = props
    const [arr, setArr] = useState(() => syntax instanceof Array ? syntax : body_func_call(syntax))
    console.log(arr)

    return <div className='synph'>
        <div>{name}</div>
        <div></div>
    </div>
}