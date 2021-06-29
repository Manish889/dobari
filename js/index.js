const hamburger = document.getElementById('hamburger');
const navbarList = document.getElementById('navlist');
const hamburgerIcon = document.getElementById('hamburger-icon');
hamburger.addEventListener('click', function() {
    navbarList.classList.toggle('navbar__list-visible')
    hamburgerIcon.classList.toggle('fa-times');
});


