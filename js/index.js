const hamburger = document.getElementById('hamburger');
const navbarList = document.getElementById('navlist');
const hamburgerIcon = document.getElementById('hamburger-icon');
hamburger.addEventListener('click', function() {
    navbarList.classList.toggle('navbar__list-visible')
    hamburgerIcon.classList.toggle('fa-times');
});

// popup
const modelOpenBtn = document.querySelectorAll('[data-model-target]');
const modelCloseBtn = document.querySelectorAll('[data-model__btn]');
const overlay = document.getElementById('model__overlay');

modelOpenBtn.forEach(button => {
    button.addEventListener('click', () => {
        const model = document.querySelector(button.dataset.modelTarget)
        openModel(model);
    })
})

overlay.addEventListener('click', () => {
    const models = document.querySelectorAll('.model.model-active');
    models.forEach(models => {
        closeModel(models)
    })
})

modelCloseBtn.forEach(button => {
    button.addEventListener('click', () => {
        const model = button.closest('.model')
        closeModel(model);
    })
})

const openModel = (model) => {
    if (model == null) return
        model.classList.add('model-active');
        overlay.classList.add('model__overlay-active')
}

const closeModel = (model) => {
    if (model == null) return
        model.classList.remove('model-active');
        overlay.classList.remove('model__overlay-active')
}


//  aos
  AOS.init();


