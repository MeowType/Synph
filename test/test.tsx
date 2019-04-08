import React from 'react'
import { SynphItem, ISyntax, syntaxOf as _syntaxOf, lexicalOf as _lexicalOf, groupOf, optionOf as _optionOf } from '../src/synph'
import { render } from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
    render(
        <>
            <SynphItem
                name='object'
                syntax={function ({ syntaxOf, lexicalOf, groupOf, optionOf}) {
                    lexicalOf('object_start', '{')
                    groupOf('object_item', function ({ syntaxOf, lexicalOf, groupOf, optionOf }) {
                        syntaxOf('string')
                        lexicalOf('colon', ':')
                        syntaxOf('value')
                    }).loop('*').middle(_lexicalOf('comma', ','))
                    lexicalOf('object_end', '}')
                }}></SynphItem>
            <SynphItem
                name='array'
                syntax={function ({ syntaxOf, lexicalOf, groupOf, optionOf }) {
                    lexicalOf('array_start', '[')
                    groupOf('array_item', _syntaxOf('value')).loop('*').middle(_lexicalOf('comma', ','))
                    lexicalOf('array_end', ']')
                }}></SynphItem>
            <SynphItem
                name='value'
                syntax={[_optionOf('value', function ({ syntaxOf, lexicalOf, groupOf, optionOf }) {
                    syntaxOf('string')
                    syntaxOf('number')
                    syntaxOf('object')
                    syntaxOf('array')
                    lexicalOf('bool', 'true')
                    lexicalOf('bool', 'false')
                    lexicalOf('null', 'null')
                })]}></SynphItem>
            <SynphItem
                name='string'
                syntax={function ({ syntaxOf, lexicalOf, groupOf, optionOf }) {
                    lexicalOf('string_start', '"')
                    optionOf('string_body', function ({ syntaxOf, lexicalOf, groupOf, optionOf }) {
                        syntaxOf('char')
                        syntaxOf('escape')
                    }).loop('*')
                    lexicalOf('string_end', '"')
                }}></SynphItem>
            <SynphItem
                name='char'
                syntax={[_syntaxOf('Any UNICODE character except " or \\ or control character')]}></SynphItem>
            <SynphItem
                name='escape'
                syntax={function ({ syntaxOf, lexicalOf, groupOf, optionOf }) {
                    lexicalOf('escape_start', '\\')
                    optionOf('escape_value', function ({ syntaxOf, lexicalOf, groupOf, optionOf }) {
                        lexicalOf('quotation mark', '"')
                        lexicalOf('reverse solidus', '\\')
                        lexicalOf('solidus', '/')
                        lexicalOf('backspace', 'b')
                        lexicalOf('formfeed', 'f')
                        lexicalOf('newline', 'n')
                        lexicalOf('carriage return', 'r')
                        lexicalOf('horizontal tab', 't')
                        syntaxOf('unicode escape')
                    })
                }}></SynphItem>
            <SynphItem
                name='unicode escape'
                syntax={function ({ syntaxOf, lexicalOf, groupOf, optionOf }) {
                    lexicalOf('unicode', 'u')
                    syntaxOf('hexadecimal digits').loop(4, 4)
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