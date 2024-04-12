const hamburger = document.querySelector(".hamburger");
let navBar = document.querySelector(".nav-bar");

hamburger.onclick = function () {
  navBar.classList.toggle("active");
};

window.onscroll = () => {
  navBar.classList.remove("active");
};
