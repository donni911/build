import Swiper, { Navigation, EffectCards, Controller, EffectFade, FreeMode } from "swiper";


var mySwiper = new Swiper(".mySwiper", {
  modules: [EffectCards, Navigation, Controller],
  effect: "cards",
  grabCursor: true,
  spaceBetween: 30,
  slidesPerView: 1,
  
});

var mySwiper2 = new Swiper(".mySwiper2", {
  modules: [Navigation, Controller, EffectFade],
  navigation: {
    nextEl: ".swiper-home-next",
    prevEl: ".swiper-home-prev",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
mySwiper2.controller.control = mySwiper;
mySwiper.controller.control = mySwiper2;

var mySwiper3 = new Swiper(".mySwiper3", {
  modules: [Navigation, FreeMode],

  slidesPerView: 3.2,
  spaceBetween: 36,
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
    nextEl: ".swiper-newfromshuba-next",
    prevEl: ".swiper-newfromshuba-prev",
  }, 
});
var mySwiper4 = new Swiper(".mySwiper4", {
  modules: [Navigation, FreeMode],

  slidesPerView: 3.2,
  spaceBetween: 36,
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
    nextEl: ".swiper-do-it-fast-next",
    prevEl: ".swiper-do-it-fast-prev",
  }, 
});
var mySwiper5 = new Swiper(".mySwiper5", {
  modules: [Navigation, FreeMode],

  slidesPerView: 3.2,
  spaceBetween: 36,
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
    nextEl: ".swiper-now-in-trend-next",
    prevEl: ".swiper-now-in-trend-prev",
  }, 
});
var mySwiper6 = new Swiper(".mySwiper6", {
  modules: [Navigation, FreeMode],

  slidesPerView: 3.2,
  spaceBetween: 36,
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
    nextEl: ".swiper-experts-taste-next",
    prevEl: ".swiper-experts-taste-prev",
  }, 
});





