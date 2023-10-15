import './style.css'
import { make, makeText } from './tree_maker'

document.body.appendChild(
    make('div', {'id': 'content'}, [
        makeText('h1', 'Hello World!')
    ])
)
