/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n// Переменные для свайпера\nvar swiper;\nvar brandsSwiper = document.querySelector('.brands-repair__body');\nvar brandsSwiperList = brandsSwiper.querySelector('.brands-repair__list');\nvar brandsSwiperItem = brandsSwiper.querySelector('.brands-repair__item');\n\n// Переменные для сворачивания/разворачивания элементов\nvar showmoreButton = document.querySelector('.brands-repair__button.button--showmore');\nvar brandsElements = document.querySelectorAll('.brands-repair__item');\nvar toggleShowmoreElements = function toggleShowmoreElements() {\n  var _iterator = _createForOfIteratorHelper(brandsElements),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var element = _step.value;\n      if (element.dataset.showmore === 'all') {\n        element.classList.toggle('brands-repair__item--hidden');\n      } else if (element.dataset.showmore === 'tablet') {\n        element.classList.toggle('brands-repair__item--hidden-tablet');\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\nvar initSlider = function initSlider() {\n  swiper = new Swiper('.swiper', {\n    slidesPerView: 2,\n    spaceBetween: 16,\n    loop: true,\n    pagination: {\n      el: '.swiper-pagination',\n      type: 'bullets',\n      clickable: true\n    },\n    breakpoints: {\n      320: {\n        slidesPerView: 1.25,\n        slidesOffsetBefore: 16\n      },\n      480: {\n        slidesPerView: 2,\n        slidesOffsetBefore: 0,\n        centeredSlides: true\n      },\n      600: {\n        slidesPerView: 3\n      }\n    }\n  });\n};\nvar addSwiperClasses = function addSwiperClasses() {\n  brandsSwiper.classList.add('swiper');\n  brandsSwiperList.classList.add('swiper-wrapper');\n  brandsSwiperItem.classList.add('swiper-slide');\n};\nvar removeSwiperClasses = function removeSwiperClasses() {\n  brandsSwiper.classList.remove('swiper');\n  brandsSwiperList.classList.remove('swiper-wrapper');\n  brandsSwiperItem.classList.remove('swiper-slide');\n};\nwindow.addEventListener(\"load\", function () {\n  var breakpoint = window.matchMedia('(max-width: 768px');\n  var checkSlider = function checkSlider(breakpoint) {\n    if (breakpoint.matches) {\n      addSwiperClasses();\n      initSlider();\n    } else {\n      if (swiper) {\n        removeSwiperClasses();\n        swiper.destroy();\n        swiper = null;\n      }\n    }\n  };\n  checkSlider(breakpoint);\n  breakpoint.addEventListener('change', function () {\n    checkSlider(breakpoint);\n  });\n  showmoreButton.addEventListener('click', function () {\n    toggleShowmoreElements();\n    if (showmoreButton.textContent === 'Показать все') {\n      showmoreButton.textContent = 'Скрыть';\n      showmoreButton.classList.add('hide');\n    } else {\n      showmoreButton.textContent = 'Показать все';\n      showmoreButton.classList.remove('hide');\n    }\n  });\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/script.js"]();
/******/ 	
/******/ })()
;