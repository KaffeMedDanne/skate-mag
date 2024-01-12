const hamburger = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})