import { Syntax, check_need_loop } from "../synph";
import { div } from "./tag";
import React from "react";
import { getOn } from "./getOn";

export function SynphSyntax(props: { syn: Syntax } & div) {
    const Class = 'synph-syntax'
    const { syn, className, ...p } = props
    const ons = getOn(syn)
    return check_need_loop(syn, <article className={className == null ? Class : `${className} ${Class}`} {...p}>
        <code {...ons}>{syn.name} </code>
    </article>)
}