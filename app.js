const mainNav = document.querySelector("#mainNavbar");
const navToggle = document.querySelector(".navbar-toggler");
const navLink = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", function (e) {
  mainNav.classList.toggle("active");
});

window.addEventListener("scroll", function (e) {
  const scrollHeight = window.pageYOffset;
  const navHeight = mainNav.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    mainNav.classList.add("sticky");
  } else {
    mainNav.classList.remove("sticky");
  }
});
