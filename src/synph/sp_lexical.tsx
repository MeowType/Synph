import { Lexical, check_need_loop } from "../synph";
import { getOn } from './getOn'
import { div } from "./tag";
import React from "react";

export function SynphLexical(props: { syn: Lexical } & div) {
    const Class = 'synph-lexical'
    const { syn, className, ...p } = props
    const ons = getOn(syn)
    return check_need_loop(syn, <article className={className == null ? Class : `${className} ${Class}`} {...p}>
        <code {...ons}>{syn.value}</code>
    </article>)
}