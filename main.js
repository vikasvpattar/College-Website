// tochange color of nv bar when crolled
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window_scroll", window.scrollY > 0);
});

// show-hide menu
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

// slide
let flag=0;
function controller(x){
  flag=flag+x;
  slideshow(flag);
}
slideshow(flag);
function slideshow(num){
  let slides= document.getElementsByClassName("slide");
  if(num==slides.length){
    flag=0;
    num=0;
  }
  if(num<0){
    flag=slides.length-1;
    num=slides.length-1;
  }

  console.log(slides);
  for(let y of slides){
    y.style.display="none";
  }
  slides[num].style.display="block";
}
