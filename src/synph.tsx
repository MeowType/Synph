export * from './syntax'
import React, { useState } from 'react'
import { ISyntax, BodyFunc, body_func_call, group } from './syntax';
import { SynphSyn } from './synph/sp_syn';
export * from './synph/sp_syn'
export * from './synph/sp_syntax'
export * from './synph/sp_lexical'
export * from './synph/sp_group'
export * from './synph/sp_item'
export * from './synph/sp_option'
export * from './synph/sp_loop'

export function Synph(props: {
    syntax: ISyntax[] | BodyFunc,
    stretch?: boolean,
    search?: boolean,
    history?: boolean,
}) {
    return <div>

    </div>
}