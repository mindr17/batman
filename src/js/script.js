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

const addNavigation = () => {
  const burger = document.querySelector('.burger');
  const navigation = document.querySelector('.navigation');
  const navigationClose = document.querySelector('.navigation__close');
  burger.addEventListener('click', () => {
    navigation.classList.add('navigation_active');
  });
  
  navigationClose.addEventListener('click', () => {
    navigation.classList.remove('navigation_active');
  });
  
  // Закрываем при клике за пределами меню
  document.addEventListener('click', (e) => {
    if (navigation.classList.contains('navigation_active')) {
      if (!navigation.contains(e.target) && e.target !== burger) {
        navigation.classList.remove("navigation_active");
      }
    }
  });
};
addNavigation();

const addMusic = async () => {
  try {
    const audioFiles = await ((ctx) => ctx.keys().map(ctx))(
      require.context("../audio", true, /.*/)
    );
    // console.log("audio loaded");
    const mute = document.querySelector('.mute__checkbox');
    const audio = new Audio(audioFiles[0]);
    
    const checkMute = () => {
      if (mute.checked) {
        audio.play();
      } else {
        audio.pause();
      }
    };
    
    if (mute) {
      checkMute();
      // setTimeout(checkMute, 2000);
    };
    
    mute.addEventListener("change", checkMute);
  } catch {
    console.log('Музыки нееет');
  }
}
addMusic();

let addSlider = () => {
  try {
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

    const videos = document.querySelectorAll('video');

    sliderMain.on('slideChange', () => {
      for (let i = 0; i < videos.length; i++) {
        videos[i].pause();
      }
    });

    const pagination = document.querySelector(".pagination");
    const paginationButton = document.querySelector(".pagination__arrow");

    paginationButton.addEventListener('click', () => {
      pagination.classList.toggle('pagination_active');
      console.log(`".pagination_active" toggled`);
      console.dir(pagination);
    })
  } catch {
    console.log("На этой странице нет слайдера")
  }
}
addSlider();