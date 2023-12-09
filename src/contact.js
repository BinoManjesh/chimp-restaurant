import { make, makeText } from './tree_maker'
import BossImage from './images/contact/boss.avif'
import ChefImage from './images/contact/chef.jpg'
import SecurityImage from './images/contact/security-guard.jpg'

function makeContactCard(img, role, name, email) {
    return make('div', {class: 'card'}, [
        make('img', {src: img, alt: 'Photo of ' + name}),
        makeText('p', role, {class: 'role'}),
        makeText('p', name, {class: 'name'}),
        makeText('p', email, {class: 'email'}),
    ]);
}

export default function makeContact() {
    return [
        make('div', {class: 'contact'}, [
            makeContactCard(BossImage,
                'Boss', 'Gaius Julius Caesar Augustus', 'boss@chimprestaurant.com'),
            makeContactCard(ChefImage,
                'Head Chef', 'Gordan Panzee', 'headchef@chimprestaurant.com'),
            makeContactCard(SecurityImage,
                'Security Guard', 'Marcus Atilius Regulus', 'security@chimprestaurant.com'),
        ])
    ];
}
