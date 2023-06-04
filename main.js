let menuToggle = document.querySelector('.menu-toggle');
let closeMenu = document.querySelector(".close");
let hero = document.querySelector(".hero-content")
function toggleMenu() {
    var menu = document.getElementById("menu");
    var logo = document.querySelector('.Logo')
    menu.classList.toggle("active");
    menuToggle.style.display = "none";
    menuToggle.classList.add("menu-geser")
    logo.classList.add("h2geser");
    closeMenu.classList.add("Gclose");
    hero.classList.add("Ghero");
}

function menuTogglex(){
  var logo = document.querySelector('.Logo');
  menu.classList.remove("active");
  menuToggle.style.display ="block";
  logo.classList.remove("h2geser");
  menuToggle.classList.remove("menu-geser");

  closeMenu.classList.remove("Gclose");
  hero.classList.remove("Ghero");
}
 
 
 
var navbar = document.querySelector('.container-navbar');
    window.addEventListener('scroll', ()=>{
      if (document.documentElement.scrollTop > 300 ){
        navbar.classList.add("scrolled");
      }else{
        navbar.classList.remove("scrolled");
      }
      
    });