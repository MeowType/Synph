import { ISyntax, Lexical, SynphLexical, Syntax, SynphSyntax, Group, SynphGroup, Options, SynphOption, Range } from "../synph";
import { tag } from "./tag";
import React from "react";
import { SynphRange } from "./sp_range";

export function SynphSyn(syn: ISyntax) {
    function make(Fn: (props: { syn: ISyntax } & tag) => JSX.Element) {
        return <Fn className='synph-syn' key={syn.id} syn={syn}></Fn>
    }
    if (syn instanceof Lexical) {
        return make(SynphLexical)
    } else if (syn instanceof Syntax) {
        return make(SynphSyntax)
    } else if (syn instanceof Group) {
        return make(SynphGroup)
    } else if (syn instanceof Options) {
        return make(SynphOption)
    } else if (syn instanceof Range) {
        return make(SynphRange)
    }
    return <></>
}