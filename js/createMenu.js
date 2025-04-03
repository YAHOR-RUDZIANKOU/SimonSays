import{createKeyboards} from "./createKeyboards.js";

export function  createMenu(){
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const menuWrapper = document.createElement('div');
menuWrapper.classList.add('menu__wrapper');

const menuContainer = document.createElement('div');
menuContainer.classList.add('menu__container');

const menuButton = document.createElement('button');
menuButton.classList.add('menu__wrapper-btn');
menuButton.textContent = 'Choose Difficulty ▼';

const menuItems = document.createElement('ul');
menuItems.classList.add('menu__items');

const menuItemsContent = document.createElement('div');
menuItemsContent.classList.add('menu__items-content');

const easyItem = document.createElement('li');
easyItem.classList.add('menu__item', 'menu__item-easy');
easyItem.textContent = 'Easy';

const mediumItem = document.createElement('li');
mediumItem.classList.add('menu__item', 'menu__item-medium');
mediumItem.textContent = 'Medium';

const hardItem = document.createElement('li');
hardItem.classList.add('menu__item', 'menu__item-hard');
hardItem.textContent = 'Hard';

menuItemsContent.appendChild(easyItem);
menuItemsContent.appendChild(mediumItem);
menuItemsContent.appendChild(hardItem);

menuItems.appendChild(menuItemsContent);

menuContainer.appendChild(menuButton);
menuContainer.appendChild(menuItems);

menuWrapper.appendChild(menuContainer);

wrapper.appendChild(menuWrapper);

document.body.appendChild(wrapper);

const easyLevel=document.querySelector('.menu__item-easy');
const medium=document.querySelector('.menu__item-medium');
const hard=document.querySelector('.menu__item-hard');

easyLevel.addEventListener('click',(event)=>{
    createKeyboards('numbers');
})

medium.addEventListener('click',()=>{
    createKeyboards('letters');
})

hard.addEventListener('click',()=>{
    createKeyboards();
});
}