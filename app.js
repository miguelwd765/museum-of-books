const mainNav = document.querySelector("#mainNavbar");
const navToggle = document.querySelector(".navbar-toggler");
const navLink = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", function (e) {
  mainNav.classList.toggle("active");
});
