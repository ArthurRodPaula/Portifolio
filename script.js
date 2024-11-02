function myFunction() {
  var element = document.body;
  element.classList.toggle("dark");
}
function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "Menu.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "close_white_36dp.svg";
  }
}
