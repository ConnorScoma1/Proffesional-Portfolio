// Selecting DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu

let showMenu = false;

// background picker
function randomBackground() {
  var randomSelector = Math.floor(Math.random() * 4) + 0;
  
  var backgroundSelector = [
    "url('https://i.pinimg.com/originals/1a/58/30/1a5830c8c6a4c011a027a75163b644c2.jpg')",
    "url('https://wallpaperplay.com/walls/full/f/4/9/87849.jpg')",
    "url('https://pixelz.cc/wp-content/uploads/2018/12/forest-lake-cabin-landscape-uhd-4k-wallpaper.jpg')",
  ]

  document.getElementById("bg-image").style.backgroundImage = backgroundSelector[randomSelector]
}



window.addEventListener('load', function(){
  randomBackground();
}, false)



menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");

    navItems.forEach(item => item.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");

    navItems.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}

