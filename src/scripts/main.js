const d = document;
const $hamburgerBtn = d.getElementById("hamburger-btn");
const $navList = d.getElementById("nav-list");

d.addEventListener("click", (e) => {
  if (e.target.matches("#hamburger-btn, #hamburger-btn *")) {
    $hamburgerBtn.classList.toggle("is-active");
    $navList.classList.toggle("hidden");
  } else {
    $hamburgerBtn.classList.remove("is-active");
    $navList.classList.add("hidden");
  }
})