const navContainer   = document.getElementById('nav-container')
const navToggle      = document.getElementById('nav-toggle')


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
    document.getElementById("navbar").style.display = "flex";
    
  } else {
    document.getElementById("navbar").style.display = "none";
    //console.log(navToggle.classList.contains('collapsed'))
  }
  
 prevScrollpos = currentScrollPos;
}