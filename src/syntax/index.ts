export * from './loop'
export * from './ASyntax'
export { Syntax } from './Syntax'
export { Lexical } from './Lexical'
export { Group } from './Group'
export { Item } from './Item'
export { Options } from './Options'
export { Range } from './Range'
import { syntax as _syntax } from './Syntax'
import { lexical as _lexical  } from './Lexical'
import { group as _group } from './Group'
import { item as _item } from './Item'
import { option as _option } from './Options'
import { range as _range  } from './Range'
export * from './utils'
import { Tail } from './utils'

function unset() { }
export function syntax(...args: Tail<typeof _syntax>) {
    return _syntax(unset, ...args)
}
export function lexical(...args: Tail<typeof _lexical>) {
    return _lexical(unset, ...args)
}
export function group(...args: Tail<typeof _group>) {
    return _group(unset, ...args)
}
export function item(...args: Tail<typeof _item>) {
    return _item(unset, ...args)
}
export function option(...args: Tail<typeof _option>) {
    return _option(unset, ...args)
}
export function range(...args: Tail<typeof _range>) {
    return _range(unset, ...args)
}