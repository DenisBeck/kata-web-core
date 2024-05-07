// import '../css/fonts.css';
// import '../css/style.css';

// Переменные для свайпера
let swiper;
let brandsSwiper = document.querySelector('.brands-repair__body');
let brandsSwiperList = brandsSwiper.querySelector('.brands-repair__list')
let brandsSwiperItem = brandsSwiper.querySelector('.brands-repair__item');

// Переменные для сворачивания/разворачивания элементов
let showmoreButton = document.querySelector('.brands-repair__button.button--showmore');
let brandsElements = document.querySelectorAll('.brands-repair__item');

const toggleShowmoreElements = function () {
    for (let element of brandsElements) {
        if (element.dataset.showmore === 'all') {
            element.classList.toggle('brands-repair__item--hidden');
        } else if (element.dataset.showmore === 'tablet') {
            element.classList.toggle('brands-repair__item--hidden-tablet');
        }
    }
}

const initSlider = function () {
    swiper = new Swiper('.swiper', {
        slidesPerView: 2,
        spaceBetween: 16,
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },

        breakpoints: {
            320: {
                slidesPerView: 1.25,
                slidesOffsetBefore: 16
            },
            480: {
                slidesPerView: 2,
                slidesOffsetBefore: 0,
                centeredSlides: true
            },
            600: {
                slidesPerView: 3
            }
        }
    });
}

const addSwiperClasses = function () {
    brandsSwiper.classList.add('swiper');
    brandsSwiperList.classList.add('swiper-wrapper');
    brandsSwiperItem.classList.add('swiper-slide');
}

const removeSwiperClasses = function () {
    brandsSwiper.classList.remove('swiper');
    brandsSwiperList.classList.remove('swiper-wrapper');
    brandsSwiperItem.classList.remove('swiper-slide')
}

window.addEventListener("load", function () {
    const breakpoint = window.matchMedia('(max-width: 768px');
    const checkSlider = function (breakpoint) {
        if (breakpoint.matches) {
            addSwiperClasses();
            initSlider();
        } else {
            if (swiper) {
                removeSwiperClasses();
                swiper.destroy();
                swiper = null;
            }
        }
    }
    checkSlider(breakpoint);
    
    breakpoint.addEventListener('change', function () {
        checkSlider(breakpoint)
    })

    showmoreButton.addEventListener('click', function () {
        toggleShowmoreElements();
        if(showmoreButton.textContent === 'Показать все') {
            showmoreButton.textContent = 'Скрыть';
            showmoreButton.classList.add('hide');
        } else {
            showmoreButton.textContent = 'Показать все';
            showmoreButton.classList.remove('hide');
        }
    })
});