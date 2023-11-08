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

const swiperCalendar = new Swiper('.swiper-calendar', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    speed: 500,
    effect: 'fade',
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
    loop: true,
    slidesPerView: 1,
    speed: 500,
    pagination: {
        el: '.news-pag',
        clickable: true,
    },
    navigation: {
        nextEl: '.news-next',
        prevEl: '.news-prev',
    },
});






// popular
const screenWidth = window.screen.width;
if (document.querySelector('.popular') != null && screenWidth > 991) {

    document.querySelector(".popular").addEventListener("mouseover", (e) => {
        if (!e.target.classList.contains('popular-link')) return;
        let shadow = e.target.parentElement.querySelector('.popular-shadow');
        shadow.style["backdrop-filter"] = "blur(15px)"

        let title = e.target.parentElement.querySelector('.title')
        title.classList.add("title-calendar")

        let list = e.target.parentElement.querySelector('ul')
        list.classList.add("active")


    })
    document.querySelector(".popular").addEventListener("mouseout", (e) => {
        if (!e.target.classList.contains('popular-link')) return;
        let shadow = e.target.parentElement.querySelector('.popular-shadow');
        shadow.style["backdrop-filter"] = ""

        let title = e.target.parentElement.querySelector('.title')
        title.classList.remove("title-calendar")

        let list = e.target.parentElement.querySelector('ul')
        list.classList.remove("active")
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

document.querySelector('.fixed-search').addEventListener('click', () => {
    document.querySelector('#search').querySelector('.search-field').focus();
})

document.querySelector(".fixed-burger").addEventListener("click", () => {
    document.querySelector(".fixed-burger").classList.toggle("active")
    let menu = document.querySelector(".header-mob-menu")
    menu.classList.toggle("active")
    document.body.style.overflowY = "scroll";
    if (menu.classList.contains("active")) {
        let scroll = parseInt(window.scrollY) + 65;
        menu.style.top = `${scroll}px`;
        console.log(menu.style.top);
        document.body.style.overflowY = "hidden";
    }
})

document.querySelector(".mob-burger").addEventListener("click", () => {
    document.querySelector(".mob-burger").classList.toggle("active")
    let menu = document.querySelector(".header-mob-menu")
    menu.classList.toggle("active")
    document.body.style.overflowY = "scroll";
    if (menu.classList.contains("active")) {
        let scroll = parseInt(window.scrollY) + 110;
        menu.style.top = `${scroll}px`;
        document.body.style.overflowY = "hidden";
    }
})


// calendar tabs

var tabEl = document.querySelector('button[data-bs-toggle="tab"]')
tabEl.addEventListener('shown.bs.tab', function (event) {
    event.target // недавно активированная вкладка
    event.relatedTarget // предыдущая активная вкладка
})