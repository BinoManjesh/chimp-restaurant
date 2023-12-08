import { make, makeText } from "./tree_maker"
import Image from './images/home-header.jpg'

export default function makeHome() {
    return [
        make('div', {class: 'hero'}, [
            make('img', {src: Image, class: 'hero'}),
            makeText('p', 'Free yourself from the limits of humanity.')
        ]),
        make('div', {class: 'card'}, [
            makeText('h3', 'Reviews'),
            make('div', {class: 'review'}, [
                makeText('p', 'Wow very good!'),
                makeText('p', '- Nikovado Avacado')
            ]),
            make('div', {class: 'review'}, [
                makeText('p', 'Give orange me give eat orange me eat orange give me eat orange give me you!'),
                makeText('p', '- Nim Chimpsky')
            ]),
            make('div', {class: 'review'}, [
                makeText('p', 'I have now realized that humans were never meant to cook food.'),
                makeText('p', '- Gordon Ramsay')
            ]),
        ])
    ];
}
