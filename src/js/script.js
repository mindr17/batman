import Swiper from "swiper/bundle";

let addRouting = () => {
  let buttons = document.querySelectorAll(".navigation__link");
  let currentPath = window.location.pathname;
  buttons.forEach((button) => {
    button.classList.remove("navigation__link_active");
    if (currentPath === button.pathname) {
      button.classList.add("navigation__link_active");
    } else if (currentPath === "/" && button.pathname === "/index.html") {
      button.classList.add("navigation__link_active");
    }
  });
};
addRouting();

let addSlider = () => {
  const sliderThumbs = new Swiper(".slider-thumbs", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
    loopedSlides: 4,
  });
  
  sliderThumbs.on("click", (swiper) => {
    swiper.slideTo(swiper.clickedIndex);
  });
  
  const sliderMain = new Swiper(".slider-main", {
    loop: true,
    spaceBetween: 10,
    loopedSlides: 4,
  });
  
  sliderThumbs.controller.control = sliderMain;
  sliderMain.controller.control = sliderThumbs;
}
addSlider();