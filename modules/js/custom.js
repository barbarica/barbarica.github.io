const navContainer   = document.getElementById('nav-container')
const mainMenu       = document.getElementById('main-menu')
const navToggle      = document.getElementById('nav-toggle')
const navDropdown    = document.getElementById('navbarSupportedContent')
const infallibleMsg  = document.getElementById('infallibleMsg')

if ( ( window.innerWidth > 800 ) && ( window.innerHeight > 600)) {
    // desktop
    navContainer.style.height = "3vh"
} else {
    // mob
    navContainer.style.height = "7vh"
    navToggle.style.margin = "0"
}

// handle navbar size start------------------------------------
// ------------------------------------------------------------
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var toggleClick = false
navToggle.addEventListener('click', async ()=>{
  if (!toggleClick){
    navContainer.style.height = ""
  } else {
    // mob (only)
    await sleep(300);
    navContainer.style.height = "7vh"
  }
  toggleClick = !toggleClick
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;  
  if (prevScrollpos > currentScrollPos) {
    // scroll up
    mainMenu.style.top = "-72px"; // unhide
  } else {
    // scroll down
    if (!navDropdown.classList.contains("show")){
      // hide only when nav options not open
      mainMenu.style.top = "-145px"; 
    }
  }
 prevScrollpos = currentScrollPos;
}
// handle navbar size end--------------------------------------
// ------------------------------------------------------------

// ------------------------------------------------------------
// Infallible Message -----------------------------------------
var i = 0;
var txt = `We are Invincible, Quite Unbeatable and Indestuctibe. 
This is Barbarika Infallible. Welcome to our Affordable A.I initiative - 
Safe, Secure and Private A.I for your Business`;
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    infallibleMsg.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
//typeWriter()
// Infallible Message -----------------------------------------
// ------------------------------------------------------------
