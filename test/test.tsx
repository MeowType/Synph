import { synph } from '../src/synph'
import { render } from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
    render(synph(), document.querySelector('#app'))
})