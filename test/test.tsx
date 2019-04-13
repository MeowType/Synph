import React from 'react'
import { SynphItem, ISyntax, syntax, lexical, group, option, range } from '../src/synph'
import { render } from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
    render(
        <>
            <SynphItem
                name='object'
                syntax={function ({ syntax, lexical, group, option, range }) {
                    lexical('object_start', '{')
                    group('object_item', function ({ syntax, lexical, group, option, range }) {
                        syntax('string')
                        lexical('colon', ':')
                        syntax('value')
                    }).loop('*').middle(lexical('comma', ','))
                    lexical('object_end', '}').onClick(e => {
                        console.log('click', e)
                    })
                }}></SynphItem>
            <SynphItem
                name='array'
                syntax={function ({ syntax, lexical, group, option, range }) {
                    lexical('array_start', '[')
                    group('array_item', syntax('value')).loop('*').middle(lexical('comma', ','))
                    lexical('array_end', ']')
                }}></SynphItem>
            <SynphItem
                name='value'
                syntax={[option('value', function ({ syntax, lexical, group, option, range }) {
                    syntax('string')
                    syntax('number')
                    syntax('object')
                    syntax('array')
                    lexical('bool', 'true')
                    lexical('bool', 'false')
                    lexical('null', 'null')
                })]}></SynphItem>
            <SynphItem
                name='string'
                syntax={function ({ syntax, lexical, group, option, range }) {
                    lexical('string_start', '"')
                    option('string_body', function ({ syntax, lexical, group, option, range }) {
                        syntax('char')
                        syntax('escape')
                    }).loop('*')
                    lexical('string_end', '"')
                }}></SynphItem>
            <SynphItem
                name='char'
                syntax={[syntax('Any UNICODE character except " or \\ or control character')]}></SynphItem>
            <SynphItem
                name='escape'
                syntax={function ({ syntax, lexical, group, option, range }) {
                    lexical('escape_start', '\\')
                    option('escape_value', function ({ syntax, lexical, group, option, range }) {
                        lexical('quotation mark', '"')
                        lexical('reverse solidus', '\\')
                        lexical('solidus', '/')
                        lexical('backspace', 'b')
                        lexical('formfeed', 'f')
                        lexical('newline', 'n')
                        lexical('carriage return', 'r')
                        lexical('horizontal tab', 't')
                        syntax('unicode escape')
                    })
                }}></SynphItem>
            <SynphItem
                name='unicode escape'
                syntax={function ({ syntax, lexical, group, option, range }) {
                    lexical('unicode', 'u')
                    syntax('hexadecimal digits').loop('4')
                }}></SynphItem>
            <SynphItem
                name='number'
                syntax={function ({ syntax, lexical, group, option, range }) {
                    lexical('-', '-').loop('?')
                    syntax('int')
                    group('', function ({ syntax, lexical, group, option, range }) {
                        lexical('.', '.')
                        syntax('digit').loop('+')
                    }).loop('?')
                    syntax('index').loop('?')
                }}></SynphItem>
            <SynphItem
                name='int'
                syntax={function ({ syntax, lexical, group, option, range }) {
                    option('', function ({ syntax, lexical, group, option, range }) {
                        lexical('0', '0')
                        group('', function ({ syntax, lexical, group, option, range }) {
                            range('digit 1-9', lexical('1', '1'), lexical('9', '9'))
                            syntax('digit').loop('*')
                        })
                    })
                }}></SynphItem>
            <SynphItem
                name='index'
                syntax={function ({ syntax, lexical, group, option, range }) {
                    option('', function ({ syntax, lexical, group, option, range }) {
                        lexical('e', 'e')
                        lexical('E', 'E')
                    })
                    option('', function ({ syntax, lexical, group, option, range }) {
                        lexical('+', '+')
                        lexical('-', '-')
                    }).loop('?')
                    syntax('digit').loop('+')
                }}></SynphItem>
            <SynphItem
                name='digit'
                syntax={function ({ syntax, lexical, group, option, range }) {
                    range('digit', lexical('0', '0'), lexical('9', '9'))
                }}></SynphItem>
        </>,
        document.querySelector('#app')
    )
})