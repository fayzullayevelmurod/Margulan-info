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


let swiper = new Swiper(".treatmentsSwiper", {
  slidesPerView: 1.10,
  spaceBetween: 28,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.2,
      spaceBetween: 28,
    },
    993: {
      slidesPerView: 3.2,
      spaceBetween: 28,
    },
    1200: {
      slidesPerView: 3.6,
      spaceBetween: 40,
    },
  },
});
