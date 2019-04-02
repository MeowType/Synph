import { Synph, rangeOf, ISyntax, syntaxOf, lexicalOf, groupOf } from '../src/synph'
import { render } from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
    render(<Synph
        name='object'
        syntax={function ({ syntaxOf, lexicalOf, groupOf}) {
            lexicalOf('object_start', '{')
            groupOf('object_item', function ({ syntaxOf, lexicalOf, groupOf}) {
                syntaxOf('string')
                lexicalOf('splitter', ':')
                syntaxOf('value')
            })
            lexicalOf('object_end', '}')
        }}></Synph>,
        document.querySelector('#app'))
})