const hamburger = document.getElementById('hamburger');
const navbarList = document.getElementById('navlist');
const hamburgerIcon = document.getElementById('hamburger-icon');
hamburger.addEventListener('click', function() {
    navbarList.classList.toggle('navbar__list-visible')
    hamburgerIcon.classList.toggle('fa-times');
});

// popup

const modelOpenBtn = document.getElementById('model-open-btn');
const modelCloseBtn = document.getElementById('model-close-btn');
const modelWindow = document.getElementById('model');
const overlay = document.getElementById('model__overlay');

modelOpenBtn.addEventListener('click', () => {
    modelWindow.classList.add('model-active');
    overlay.classList.add('model__overlay-active')
})

modelCloseBtn.addEventListener('click', () => {
    modelWindow.classList.remove('model-active');
    overlay.classList.remove('model__overlay-active')
})

overlay.addEventListener('click', () => {
    modelWindow.classList.remove('model-active');
    overlay.classList.remove('model__overlay-active')
})