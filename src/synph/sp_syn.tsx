import { ISyntax, Lexical, SynphLexical, Syntax, SynphSyntax, Group, SynphGroup, Options, SynphOption } from "../synph";
import { tag } from "./tag";
import React from "react";

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
    }
    return <></>
}