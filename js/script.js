// On récupère le bouton et le menu
let boutonBurger = document.querySelector('.boutonBurger');
let menuBurger = document.querySelector('.menuBurger');

// On récupère les spans du menu Hamburger
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let span3 = document.querySelector('.span3');

// On récupère les éléments du menu
let elts = document.querySelectorAll('.elt');

// On créer une fonction pour ouvrir et fermer le menu
function toggleMenu() {
    menuBurger.classList.toggle('menuBurgerOpen');
    span1.classList.toggle('span1Open');
    span2.classList.toggle('span2Open');
    span3.classList.toggle('span3Open');
} 

// On créer un écouteur d'événements sur le bouton qui utilise cette fonction
boutonBurger.addEventListener('click', toggleMenu);

// On ajoute cette fonction sur chaque élément du menu
for (let i = 0; i < elts.length; i++) {
    elts[i].addEventListener('click', toggleMenu);
}
