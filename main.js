// tochange color of nv bar when crolled
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window_scroll", window.scrollY > 0);
});

// sho-hide menu
const menu = document.querySelector(".nav_menu");
const menubtn = document.querySelector("#menu_button");
const closebtn = document.querySelector("#menu_close");

menubtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closebtn.style.display = "inline-block";
  menubtn.style.display = "none";
});

closebtn.addEventListener("click", () => {
  menu.style.display = "none";
  closebtn.style.display = "none";
  menubtn.style.display = "inline-block";
});
