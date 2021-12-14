const mainNav = document.querySelector("#mainNavbar");
const navToggle = document.querySelector(".navbar-toggler");
const navLink = document.querySelectorAll(".nav-link");

const navContent = document.querySelector("#navbarContent");
const navCollapse = new bootstrap.Collapse(navContent, { toggle: false });

const topBtn = document.querySelector(".top-btn");

let isNavOpen = mainNav.classList.contains("active");

navToggle.addEventListener("click", function (e) {
  mainNav.classList.toggle("off-active");
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

  if (scrollHeight > 500) {
    topBtn.classList.add("show-top-btn");
  } else {
    topBtn.classList.remove("show-top-btn");
  }
});

for (let link of navLink) {
  link.addEventListener("click", function (e) {
    navCollapse.toggle();
    mainNav.classList.remove("active");
    mainNav.classList.add("off-active");
  });
}

const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();
