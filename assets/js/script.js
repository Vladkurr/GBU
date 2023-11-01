const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    speed: 500,
    effect: 'fade',
    // grabCursor: true,
    breakpoints: {
        992: {
            direction: 'vertical',
        },
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const swiperNews = new Swiper('.swiper-news', {
    direction: 'horizontal',
    spaceBetween: 0,
    // centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    speed: 500,
    // grabCursor: true,
    pagination: {
        el: '.news-pag',
        clickable: true,
    },
    navigation: {
        nextEl: '.news-next',
        prevEl: '.news-prev',
    },
});



document.querySelector(".mob-burger").addEventListener("click", () => {
    document.querySelector(".mob-burger").classList.toggle("active")
    document.querySelector(".header-mob-menu").classList.toggle("active")
    document.querySelector('body').style["overflow"] = "scroll";
    if (document.querySelector(".header-mob-menu").classList.contains("active")) {
        document.querySelector('body').style["overflow"] = "hidden";
    }
})


if (document.querySelector('.popular') != null) {
    document.querySelector(".popular").addEventListener("mouseover", (e) => {
        if (!e.target.classList.contains('popular-link')) return;
        let shadow = e.target.parentElement.querySelector('.popular-shadow');
        shadow.style["backdrop-filter"] = "blur(30px)"
    })
    document.querySelector(".popular").addEventListener("mouseout", (e) => {
        if (!e.target.classList.contains('popular-link')) return;
        let shadow = e.target.parentElement.querySelector('.popular-shadow');
        shadow.style["backdrop-filter"] = ""
    })
}

// header-fixed 

window.addEventListener("scroll", () => {
    HeaderHight = document.querySelector('header').offsetHeight;
    let scrollDistance = window.scrollY;
    let headerFixed = document.querySelector('.header-fixed');
    if (scrollDistance > HeaderHight && !headerFixed.classList.contains("active")) {
        headerFixed.classList.add("active")
    }
    if (scrollDistance < HeaderHight && headerFixed.classList.contains("active")) {
        headerFixed.classList.remove("active")
    }
})
document.querySelector('#search').focus();

document.querySelector('.fixed-search').addEventListener('click', () => {
    document.querySelector('#search').querySelector('.search-field').focus();
})

document.querySelector(".fixed-burger").addEventListener("click", () => {
    document.querySelector(".fixed-burger").classList.toggle("active")
    let menu = document.querySelector(".header-mob-menu")
    menu.classList.toggle("active")
    document.body.style.overflowY = "scroll";
    if (menu.classList.contains("active")) {
        menu.style = 'top:' + (parseInt(window.scrollY) + 65) + "px"
        console.log('top:' + (parseInt(window.scrollY) + parseInt(window.innerHeight)));
        document.body.style.overflowY = "hidden";
    }
})