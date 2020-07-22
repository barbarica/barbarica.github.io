const container     = document.getElementById('container')
const body          = document.getElementById('body')
var fc              = document.getElementsByClassName('fc')
var listFab         = document.getElementById('list-fab')
var circleFab       = document.getElementById('circle-fab')

if ( ( window.innerWidth > 800 ) && ( window.innerHeight > 600)) {
    // desktop
    console.log('desk')
    container.style.maxWidth = "60vw"
} else {
    // mob
    body.style.fontSize = "1.4em"
    document.body.style.backgroundImage = "url('img_tree.png')";

    // float a-button
    listFab.style.right = '2%'
    circleFab.style.right = '20%'

    // flip bars
    for(let i=0; i<fc.length; i++){
        fc[i].style.display = "none"
    }
}

// fab
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {direction: 'left'});
    //instance.open();
    //instance.close();
    
});


$(document).ready(function(){
    $('.floatingButton').on('click',
        function(e){
            e.preventDefault();
            $(this).toggleClass('open');
            if($(this).children('.fa').hasClass('fa-plus'))
            {
                $(this).children('.fa').removeClass('fa-plus');
                $(this).children('.fa').addClass('fa-close');
            } 
            else if ($(this).children('.fa').hasClass('fa-close')) 
            {
                $(this).children('.fa').removeClass('fa-close');
                $(this).children('.fa').addClass('fa-plus');
            }
            $('.floatingMenu').stop().slideToggle();
        }
    );
    $(this).on('click', function(e) {
        var container = $(".floatingButton");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && $('.floatingButtonWrap').has(e.target).length === 0) 
        {
            if(container.hasClass('open'))
            {
                container.removeClass('open');
            }
            if (container.children('.fa').hasClass('fa-close')) 
            {
                container.children('.fa').removeClass('fa-close');
                container.children('.fa').addClass('fa-plus');
            }
            $('.floatingMenu').hide();
        }
    });
});