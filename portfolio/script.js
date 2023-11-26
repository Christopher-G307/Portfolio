hamburger = document.querySelector(".hamburger");

hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

window.onscroll = () => {
  navBar.classList.remove("active");
};
