const mainNav = document.querySelector("#mainNavbar");
const linksContainer = document.querySelector(".links-container");
const navToggle = document.querySelector(".navbar-toggler");
const navLink = document.querySelectorAll(".nav-link");

const navContent = document.querySelector("#navbarContent");
const navCollapse = new bootstrap.Collapse(navContent, { toggle: false });

const topBtn = document.querySelector(".top-btn");

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
    e.preventDefault();
    const navHeight = mainNav.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const id = link.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - navHeight;

    if (navHeight > 58.5) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    navCollapse.toggle();
    mainNav.classList.remove("active");
    mainNav.classList.add("off-active");
  });
}

const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();
