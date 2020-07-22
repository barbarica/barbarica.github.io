const container     = document.getElementById('container')
const body          = document.getElementById('body')

if ( ( window.innerWidth > 800 ) && ( window.innerHeight > 600)) {
    // desktop
    console.log('desk')
    container.style.width = "60%"
} else {
    // mob
    body.style.fontSize = "1.4em"
}

// fab
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {direction: 'left'});
    //instance.open();
    //instance.close();
});