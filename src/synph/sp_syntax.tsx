import { Syntax, check_need_loop } from "../synph";
import { div } from "./tag";
import React from "react";

export function SynphSyntax(props: { syn: Syntax } & div) {
    const Class = 'synph-syntax'
    const { syn, className, ...p } = props
    return check_need_loop(syn, <article className={className == null ? Class : `${className} ${Class}`} {...p}>
        <code>{syn.name} </code>
    </article>)
}