// burger
let burger = document.querySelector('.burger');
let headerMenu = document.querySelector('.header_right');
let headerMenuClose = document.querySelector('.header_right_close');

burger.addEventListener('click', ()=> {
  headerMenu.classList.add('active')
})

headerMenuClose.addEventListener('click', ()=> {
  headerMenu.classList.remove('active')
})
// burger

// accordion
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  const header = item.querySelector(".accordion_btn");
  const content = item.querySelector(".content");

  header.addEventListener("click", () => {
    content.style.maxHeight = content.style.maxHeight
      ? null
      : content.scrollHeight + "px";
  });
});
// accordion


let swiper = new Swiper(".commentSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".comment-button-next",
    prevEl: ".comment-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 63,
    },
  },
});
