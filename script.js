const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector(".navbar nav");
const navLinks = document.querySelectorAll(".navbar nav ul li a");

menuBtn.addEventListener("click", () => {
  if (!menuBtn.classList.contains("toggled")) {
    menuBtn.classList.add("toggled");
    nav.classList.add("toggled");
  } else {
    menuBtn.classList.remove("toggled");
    nav.classList.remove("toggled");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("toggled");
    nav.classList.remove("toggled");
  });
});
