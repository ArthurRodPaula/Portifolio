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

var entidade = document.getElementById("imagem");

// Altere o número para a apliação/redução desejada
var fator_lupa = 4;

entidade.onmouseover = function () {
  this.style.width = this.clientWidth * fator_lupa + "px";
};

entidade.onmouseout = function () {
  this.style.width = this.clientWidth / fator_lupa + "px";
};
