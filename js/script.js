let burgerIcon = document.querySelector('.header__burger-icon');
let burgerMenu = document.querySelector('.menu');
let body = document.querySelector('body');


function f1 () {
    burgerIcon.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    body.classList.toggle('lock')
}

burgerIcon.addEventListener('click', f1);