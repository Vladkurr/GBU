document.querySelector(".mob-burger").addEventListener("click", () => {
    document.querySelector(".mob-burger").classList.toggle("active")
    document.querySelector(".header-mob-menu").classList.toggle("active")
})

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    speed: 500,
    effect: 'fade',
    grabCursor: true,
    breakpoints: {
        992: {
            direction: 'vertical',
        },
    },

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const swiperNews = new Swiper('.swiper-news', {
    direction: 'horizontal',
    rewind: true,
    spaceBetween: 30,
    // centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    speed: 500,
    grabCursor: true,
    pagination: {
        el: '.news-pag',
    },
    navigation: {
        nextEl: '.news-prev',
        prevEl: '.news-next',
    },

});