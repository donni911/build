const burgerMenu = document.querySelector(".js-burger");
const openMenu = document.querySelector(".js-menu");
const backMenu = document.querySelector(".js-back");
const nextMenu = document.querySelector(".js-next");
const openMenu2 = document.querySelector(".js-menu2");
const overlay = document.querySelector(".js-overlay");

burgerMenu.addEventListener("click", function () {
  openMenu.classList.add("__active");
  overlay.classList.add("is-active");
  document.body.classList.toggle("__lock");
});

nextMenu.addEventListener("click", function () {
  openMenu2.classList.add("__active");
});
backMenu.addEventListener("click", function () {
  openMenu2.classList.toggle("__active");
});
// --------------------CLOSEMENU-------------------------------
let closeMenu = document.querySelectorAll(".js-close");
for (let closes of closeMenu) {
  closes.addEventListener("click", deleteActive);
}
function deleteActive() {
  openMenu.classList.remove("__active");
  openMenu2.classList.remove("__active");
  overlay.classList.remove("is-active");
}