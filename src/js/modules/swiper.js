import Swiper, {
  Navigation,
  EffectCards,
  Controller,
  EffectFade,
  Thumbs,
} from "swiper";



let mySwiper = new Swiper(".mySwiper", {
  modules: [EffectCards, Navigation, Controller],
  navigation: {
    nextEl: ".swiper-brauni-next",
    prevEl: ".swiper-brauni-prev",
  },
  effect: "cards",
  cardsEffect: {
    rotate: 20,
  },
  grabCursor: true,
  spaceBetween: 30,
  slidesPerView: 1,
});

let mySwiper2 = new Swiper(".mySwiper2", {
  modules: [Navigation, Controller, EffectFade],
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  grabCursor: true,
  slidesPerView: 1,
});

mySwiper2.controller.control = mySwiper;
mySwiper.controller.control = mySwiper2;
// ===============================================SWIPER3===============================================
// let mySwiper3 = new Swiper(".js-swiper", {
//   modules: [Navigation],
//   slidesPerView: 3.2,
//   freeMode: true,
//   navigation: {
//     nextEl: ".swiper-newfromshyba-next",
//     prevEl: ".swiper-newfromshyba-prev",
//   },
// });
let mySwiper3 = new Swiper(".js-carusel", {
  modules: [Navigation],
  slidesPerView: 3.2,
  freeMode: true,
  breakpoints: {
    320:{
      slidesPerView:1,
    },
    480: {
      slidesPerView:2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  navigation: {
      nextEl: ".swiper-newfromshyba-next",
      prevEl: ".swiper-newfromshyba-prev",
  },
});
let mySwiper4 = new Swiper(".js-carusel2", {
  modules: [Navigation],
  slidesPerView: 3.2,
  freeMode: true,
  navigation: {
      nextEl: ".swiper-doitfast-next",
      prevEl: ".swiper-doitfast-prev",
  },
});
let mySwiper5 = new Swiper(".js-carusel3", {
  modules: [Navigation],
  slidesPerView: 3.2,
  freeMode: true,
  navigation: {
      nextEl: ".swiper-nowintrend-next",
      prevEl: ".swiper-nowintrend-prev",
  },
});
// ------------------------------------------------------SWIPER-RECIPESWEEK-----------------------
var swiper = new Swiper(".js-carucel-week1", {
  modules: [Navigation, Thumbs],
  navigation: {
    nextEl: ".recipeoftheweek-button-next",
    prevEl: ".recipeoftheweek-button-prev",
  },
  spaceBetween: 24,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesProgress: true,
  thumbs: {
    swiper: swiper2,
  },
});
var swiper2 = new Swiper(".js-carucel-week2", {
  modules: [Navigation, Thumbs, EffectFade],
  slidesPerView: 1,
  effect: "fade",
  navigation: {
    nextEl: ".recipeoftheweek-button-next",
    prevEl: ".recipeoftheweek-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

let TasteExperts = new Swiper(".tasteExperts-swiper", {
  modules: [Navigation],
  slidesPerView: 3,
  freeMode: true,
  spaceBetween: 30,
  breakpoints: {
    320:{
      slidesPerView:1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView:2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
    },
  },
  navigation: {
      nextEl: ".swiper-tasteexperts-next",
      prevEl: ".swiper-tasteexperts-prev",
  },
});
