const hamburger = document.getElementById('hamburger');
const navbarList = document.getElementById('navlist');
hamburger.addEventListener('click', function() {
    navbarList.classList.toggle('navbar__list-visible')
});


