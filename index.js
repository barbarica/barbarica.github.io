const container     = document.getElementById('container')
const body          = document.getElementById('body')

if ( ( window.innerWidth > 800 ) && ( window.innerHeight > 600)) {
    // desktop
    console.log('desk')
    container.style.width = "65%"
} else {
    // mob
    body.style.fontSize = "1.4em"
}