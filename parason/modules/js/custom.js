const navContainer   = document.getElementById('nav-container')
const mainMenu       = document.getElementById('main-menu')
const navToggle      = document.getElementById('nav-toggle')
const navDropdown    = document.getElementById('navbarSupportedContent')


if ( ( window.innerWidth > 800 ) && ( window.innerHeight > 600)) {
    // desktop
    navContainer.style.height = "4vh"
} else {
    // mob
    navContainer.style.height = "7vh"
    navToggle.style.margin = "0"
}

navToggle.addEventListener('click', ()=>{
    navContainer.style.height = ""
})


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;  
  if (prevScrollpos > currentScrollPos) {
    mainMenu.style.top = "-72px"; // unhide
  } else {
    mainMenu.style.top = "-145px"; // hide
    navDropdown.classList.remove("show")
    navToggle.ariaExpanded = "false"
  }
  
 prevScrollpos = currentScrollPos;
}


