import "./styles/style.scss";

const btnHamburger = document.querySelector(
  "#btnHamburger"
) as HTMLButtonElement;
const header = document.querySelector(".header") as HTMLDivElement;
const overlay = document.querySelector(".overlay") as HTMLDivElement;
const headerMenu = document.querySelector(".header-menu") as HTMLDivElement;
const body = document.querySelector("body") as HTMLBodyElement;

btnHamburger.addEventListener("click", function () {
  header.classList.toggle("open");
  body.classList.toggle("no-scroll");

  overlay.classList.toggle("fade-in");
  headerMenu.classList.toggle("fade-in");

  overlay.classList.toggle("fade-out");
  headerMenu.classList.toggle("fade-out");
});
