import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

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

//Меню навигации
let navMenu = document.querySelector('.navigation');
let navMenuItems = navMenu.querySelectorAll('.title');

// Переменные для попапов и бургер-меню
let chatButtons = document.querySelectorAll('.button--chat');
let callButtons = document.querySelectorAll('.button--phone');
let modal = document.querySelector('.modal');
let closeModalButtons = modal.querySelectorAll('.button--close');

let burgerButton = document.querySelector('.button--burger');
let burgerMenu = document.querySelector('.page__aside');
let closeMenuButton = burgerMenu.querySelector('.button--close');
let page = document.querySelector('.page');
let pageBody = page.querySelector('.page__body');

const openBurgerMenu = function () {
    burgerMenu.classList.add('open');
}

const closeBurgerMenu = function () {
    burgerMenu.classList.remove('open');
}

const openModal = function () {
    page.classList.add('open-modal');
}

const closeModal = function () {
    let modalBodies = modal.querySelectorAll('.modal__body');
    for (let modalBody of modalBodies) {
        modalBody.classList.remove('modal__body--active');
    }
    page.classList.remove('open-modal');
}

const addListenersToElementsCollection = function (elements, event, callback) {
    for (let element of elements) {
        element.addEventListener(event, callback);
    }
}

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
    let elementsList = document.querySelector(`.${className}__list`);
    let elementsToShow = elementsList.querySelectorAll(`.${className}__item`);
    if (button.classList.contains(`${className}__button`)) {
        elementsList.classList.toggle('shown');
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
        modules: [ Pagination ],
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
    const breakpointMobile = window.matchMedia('(max-width: 767px)');
    const breakpointTablet = window.matchMedia('(max-width: 991px)')
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
    checkSlider(breakpointMobile);
    breakpointMobile.addEventListener('change', function () {
        checkSlider(breakpointMobile)
    });

    breakpointTablet.addEventListener('change', function () {
        if (!breakpointTablet.matches) {
            closeBurgerMenu();
        }
    });

    addListenersToElementsCollection (showmoreButtons, 'click', function (e) {
        toggleShowmoreElements('brands-repair', e.target);
        toggleShowmoreElements('tech-types-repair', e.target);
        this.classList.toggle('hide');
        if(this.textContent === 'Показать все') {
            this.textContent = 'Скрыть';
        } else {
            this.textContent = 'Показать все';
        }
    })

    burgerButton.addEventListener('click', openBurgerMenu);
    closeMenuButton.addEventListener('click', closeBurgerMenu);
    pageBody.addEventListener('click', function (e) {
        if (e.target !== burgerButton) {
            closeBurgerMenu();
        }
    })

    navMenu.addEventListener('click', function (e) {
        for (let menuItem of navMenuItems) {
            menuItem.classList.remove('title--active');
        }
        if (e.target.classList.contains('title--with-decor')) {
            e.preventDefault();
            e.target.classList.add('title--active');
        }
    })

    addListenersToElementsCollection (closeModalButtons, 'click', closeModal);
    addListenersToElementsCollection (chatButtons, 'click', function () {
        closeBurgerMenu();
        modal.querySelector('.modal-chat').classList.add('modal__body--active');
        openModal();
    });
    addListenersToElementsCollection (callButtons, 'click', function () {
        closeBurgerMenu();
        modal.querySelector('.modal-call').classList.add('modal__body--active');
        openModal();
    });
    modal.addEventListener('click', function (e) {
        if (e.target === e.currentTarget || e.target === modal.querySelector('.modal__container')) {
            closeModal();
        }
    })   
});

window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeBurgerMenu();
        closeModal();
    }
});
