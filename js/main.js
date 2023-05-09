(function () {
    let header = document.querySelector(".header")
    window.onscroll = () => {
        if (window.pageYOffset > 100) {
            header.classList.add('header-active')
        } else {
            header.classList.remove('header-active')
        }
    }
}())

//burger handler

(function () {
    let burgerItem = document.querySelector('.burger')
    let menuClose = document.querySelector('.header-nav-close')
    let menu = document.querySelector('.header-nav')
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-nav-active')
    })

    menuClose.addEventListener('click', () => {
        menu.classList.remove('header-nav-active')
    })
}())