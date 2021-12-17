import "./index.css";

const closeButton = document.getElementById("close");
const openButton = document.getElementById("open");
const mobileNav = document.getElementById("mobileNav");

openButton.addEventListener("click", () => {
  mobileNav.classList.remove("hidden");
});
closeButton.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
});
