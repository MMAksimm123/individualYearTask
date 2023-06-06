'use strict'

const menu = document.querySelector('.text__header');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
});
