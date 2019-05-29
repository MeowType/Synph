import { component, SynValidator } from './utils';
import { ISyntax, Lexical, Syntax, Group, SynphGroup, Options } from '../synph';

export const SynphSyn = component<{
    syn: ISyntax
}>({
    name: 'SynphSyn',
    functional: true,
    props: {
        syn: SynValidator()
    },
    render(h, context) {
        const { syn } = context.props
        function make(tag: any) {
            return h(tag, {
                key: syn.id,
                props: {
                    syn: syn
                }
            })
        }
        if (syn instanceof Lexical) {
            //return make(SynphLexical)
        } else if (syn instanceof Syntax) {
            //return make(SynphSyntax)
        } else if (syn instanceof Group) {
            return make(SynphGroup)
        } else if (syn instanceof Options) {
            //return make(SynphOption)
        } else if (syn instanceof Range) {
            //return make(SynphRange)
        }
        return []
    }
})