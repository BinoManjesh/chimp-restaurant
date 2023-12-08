import { make, makeText } from './tree_maker'
import MonkeyBread from './images/menu/monkey-bread.jpg'
import MonkeyCake from './images/menu/monkey-cake.jpg'
import FruitSalad from './images/menu/fruit-salad.webp'

function makeItem(img, name, isVeg, price, description) {
    return make('div', {class: 'menu-item card'}, [
        make('img', {src: img, alt: `Image of the ${name} dish`}),
        makeText('h4', name),
        make('div', {class: 'indicator' + (isVeg ? ' green' : '')}, [
            make('div')
        ]),
        makeText('p', 'Rs. ' + price, {class: 'price'}),
        makeText('p', description, {class: 'desc'})
    ]);
}

export default function makeMenu() {
    return [
        make('div', {class: 'menu'}, [
            makeItem(MonkeyBread, 'Monkey Bread', true, 69, 'Definitely not made with real monkeys'),
            makeItem(FruitSalad, 'Special Salad', true, 360, 'Salad made from freshly picked fruits from the forests of Central Africa'),
            makeItem(MonkeyCake, 'Monkey Cake', false, 420, 'Made with ethically harvested free range organic monkeys'),
        ]),
    ];
}
