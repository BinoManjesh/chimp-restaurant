import './style.css'
import { make, makeText } from './tree_maker'

document.body.appendChild(
    make('div', {'id': 'content'}, [
        make('div', {id: 'tab-list'}, [
            makeText('button', 'Home'),
            makeText('button', 'Menu'),
            makeText('button', 'Contact'),
        ]),
        make('div', {'id': 'tab-content'}, [
            makeText('p', 'bruh')
        ])
    ])
)
