let routing = () => {
  let routes = [
    "index.html",
    "video.html",
    "photo.html",
  ];
  let buttons = document.querySelectorAll(".navigation__link");
  let links = [];
  let currentPath = window.location.pathname;
  console.log(window.location.pathname);
  buttons.forEach((button) => {
    pathName = button.pathname;
    button.classList.remove("navigation__link_active");
    if (currentPath === pathName) {
      console.log(button);
      button.classList.add("navigation__link_active");
    }
  });
  // let url = document.URL;
}
routing();