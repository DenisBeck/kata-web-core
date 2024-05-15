import './css/fonts';
import './css/style';

// Переменные для свайпера
let swipers = [
    {
        swiperInstance: null,
        className: 'tech-types-repair__body'
    },
    {
        swiperInstance: null,
        className: 'brands-repair__body'
    },
    {
        swiperInstance: null,
        className: 'service-price__body',
        slidesOffset: 8
    }
]

// Переменные для сворачивания/разворачивания элементов
let showmoreButtons = document.querySelectorAll('.button--showmore');

const clearHiddenElements = function() {
    let hiddenElements = document.querySelectorAll('[data-hidden]');
    for (let element of hiddenElements) {
        element.classList.add('item-hidden');
        if (element.dataset.hidden === 'tablet-only') {
            element.classList.add('item-hidden--tablet-only');
        }
    }
}
const toggleShowmoreElements = function (className, button) {
    let elementsToShow = document.querySelectorAll(`.${className}__item`);
    if (button.classList.contains(`${className}__button`)) {
        for (let element of elementsToShow) {
            if (element.dataset.hidden === 'tablet-desktop') {
                element.classList.toggle('item-hidden');
            } else if (element.dataset.hidden === 'tablet-only') {
                element.classList.toggle('item-hidden');
                element.classList.toggle('item-hidden--tablet-only');
            }
        }
    }
}

const initSlider = function (swiper) {
    swiper.swiperInstance = new Swiper(`.${swiper.className}`, {
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
                slidesOffsetBefore: swiper.slidesOffset || 16
            },
            480: {
                slidesPerView: 1,
                slidesOffsetBefore: 0,
            },
            600: {
                slidesPerView: 3
            }
        }
    });
}

window.addEventListener("load", function () {
    const breakpoint = window.matchMedia('(max-width: 767px');
    const checkSlider = function (breakpoint) {
        if (breakpoint.matches) {
            for (let swiper of swipers) {
                initSlider(swiper);
            }
            
        } else {
            clearHiddenElements();
            for (let swiper of swipers) {
                if (swiper.swiperInstance) {
                    swiper.swiperInstance.destroy();
                    swiper.swiperInstance = null;
                }
                
            }
        }
    }
    checkSlider(breakpoint);
    
    breakpoint.addEventListener('change', function () {
        checkSlider(breakpoint)
    })

    for (let showmoreButton of showmoreButtons) {
        showmoreButton.addEventListener('click', function (e) {
            toggleShowmoreElements('brands-repair', e.target);
            toggleShowmoreElements('tech-types-repair', e.target);
            showmoreButton.classList.toggle('hide');
            if(showmoreButton.textContent === 'Показать все') {
                showmoreButton.textContent = 'Скрыть';
            } else {
                showmoreButton.textContent = 'Показать все';
            }
        })
    }
});