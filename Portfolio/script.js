const hb = document.getElementById("hamburger");
const navmenu = document.getElementById("nav-menu");
hb.addEventListener("click", () => {
  console.log("toggled");
  navmenu.classList.toggle("show");
});
