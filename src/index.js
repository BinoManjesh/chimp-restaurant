import './style.css'
import { make, makeText } from './tree_maker'
import makeHome from './home';
import makeMenu from './menu';
import makeContact from './contact';

document.body.appendChild(
    make('div', {'id': 'content'}, [
        make('div', {id: 'tab-list'}, [
            makeText('button', 'Home'),
            makeText('button', 'Menu'),
            makeText('button', 'Contact'),
        ]),
        make('div', {'id': 'tab-content'}, [make('div')])
    ])
);

const Home = makeHome();
const Menu = makeMenu();
const Contact = makeContact();

const tabElements = [Home, Menu, Contact];
const tabContent = document.querySelector('#tab-content');
const tabButtons = document.querySelector('#tab-list').children;

let selectedTab = 0;

function setTab(number) {
    if (number === selectedTab) {
        return;
    }
    tabButtons[selectedTab].removeAttribute('class');
    selectedTab = number;
    tabButtons[number].className = 'selected';
    tabContent.replaceChildren(...tabElements[number]);
}
    
for (const i in tabElements) {
    const button = tabButtons[i];
    button.addEventListener('click', ()=>setTab(i));
}

setTab('0');
