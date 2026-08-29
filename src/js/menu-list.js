import menu from '../templates/menu.json';
import makeListPizza from '../templates/menu.hbs';

const pizzaList = makeListPizza({menu});
const menuList = document.querySelector('.menu');
menuList.innerHTML = pizzaList;
console.log(pizzaList);