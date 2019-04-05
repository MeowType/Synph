import React from 'react'
import { SynphItem, rangeOf, ISyntax, syntaxOf as _syntaxOf, lexicalOf as _lexicalOf, groupOf, loopOf } from '../src/synph'
import { render } from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
    render(
        <>
            <SynphItem
                name='object'
                syntax={function ({ syntaxOf, lexicalOf, groupOf, loopOf }) {
                    lexicalOf('object_start', '{')
                    loopOf('object_item', function ({ syntaxOf, lexicalOf, groupOf, loopOf }) {
                        syntaxOf('string')
                        lexicalOf('colon', ':')
                        syntaxOf('value')
                    }, _lexicalOf('comma', ',')).set_range(0)
                    lexicalOf('object_end', '}')
                }}></SynphItem>
            <SynphItem
                name='array'
                syntax={function ({ syntaxOf, lexicalOf, groupOf, loopOf }) {
                    lexicalOf('array_start', '[')
                    loopOf('object_item', _syntaxOf('value'), _lexicalOf('comma', ',')).set_range(0)
                    lexicalOf('object_end', ']')
                }}></SynphItem>
        </>,
        document.querySelector('#app')
    )
})

function a() {
    return function b<A>(a: A) {
        return a
    }
}