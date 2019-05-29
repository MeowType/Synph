import { component } from './utils';
import { VNode } from 'vue';

export const ValNode = component<{
    tag?: string,
    items: VNode[]
}>({
    name: 'ValNode',
    functional: true,
    props: {
        tag: {
            type: String
        },
        items: {
            required: true,
            validator(value: any) {
                return value == null || value instanceof Array
            }
        }
    },
    render(h, context) {
        const { items, tag } = context.props
        if (items == null) return []
        return typeof tag == 'string' ? h(tag, items) : items
    }
})