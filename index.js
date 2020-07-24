const container     = document.getElementById('container')
const body          = document.getElementById('body')
var fc              = document.getElementsByClassName('fc')
var listFab         = document.getElementById('list-fab')
var sbInput         = document.getElementById('sb-input')
var sb              = document.getElementById('sb')
var sbOutput        = document.getElementById('search-bar-op')
var sbOutputCross   = document.getElementById('search-bar-op-cross')

// config fab list
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
// fab list end


// Desktop  / Mob
if ( ( window.innerWidth > 800 ) && ( window.innerHeight > 600)) {
    // desktop
    console.log('desk')
    container.style.maxWidth = "60vw"

    // search bar transition
    sb.style.webkitTransition = "width 0.4s ease-in-out"
    sb.style.transition = "width 0.4s ease-in-out"

} else {
    // mob
    body.style.fontSize = "1.4em"
    document.body.style.backgroundImage = "url('img_tree.png')";
    container.style.marginTop = "5em"

    // float a-button
    listFab.style.right = '5%'

    // flip bars
    for(let i=0; i<fc.length; i++){
        fc[i].style.display = "none"
    }

    // search bar input
    sbInput.style.maxHeight = "1em !important"
    sb.style.overflowX = "0"
    sb.style.width = "90vw";
    sb.style.top = "2em"
}




// sb input dynamics start
sbInput.addEventListener('click', e => {
    if (sbInput.innerText.includes('Type what you are looking for ...')){
        sbInput.innerHTML = ''
        cursorManager.setEndOfContenteditable(sbInput);
    }
})

sbInput.addEventListener('keydown', e => {
    if ( e.keyCode==13){
        sbOutput.style.display = "block"
        e.preventDefault();
        //console.log('broke!')
    }
})

sbOutputCross.addEventListener('click', ()=>{
    console.log('clicked')
    sbOutput.style.display = "none"
    sbInput.innerHTML = "&#xF002; Type what you are looking for ..."
})
// sb input dynamics end



/// helper
//Namespace management idea from http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-1/
(function( cursorManager ) {

    //From: http://www.w3.org/TR/html-markup/syntax.html#syntax-elements
    var voidNodeTags = ['AREA', 'BASE', 'BR', 'COL', 'EMBED', 'HR', 'IMG', 'INPUT', 'KEYGEN', 'LINK', 'MENUITEM', 'META', 'PARAM', 'SOURCE', 'TRACK', 'WBR', 'BASEFONT', 'BGSOUND', 'FRAME', 'ISINDEX'];

    //From: https://stackoverflow.com/questions/237104/array-containsobj-in-javascript
    Array.prototype.contains = function(obj) {
        var i = this.length;
        while (i--) {
            if (this[i] === obj) {
                return true;
            }
        }
        return false;
    }

    //Basic idea from: https://stackoverflow.com/questions/19790442/test-if-an-element-can-contain-text
    function canContainText(node) {
        if(node.nodeType == 1) { //is an element node
            return !voidNodeTags.contains(node.nodeName);
        } else { //is not an element node
            return false;
        }
    };

    function getLastChildElement(el){
        var lc = el.lastChild;
        while(lc && lc.nodeType != 1) {
            if(lc.previousSibling)
                lc = lc.previousSibling;
            else
                break;
        }
        return lc;
    }

    //Based on Nico Burns's answer
    cursorManager.setEndOfContenteditable = function(contentEditableElement)
    {

        while(getLastChildElement(contentEditableElement) &&
              canContainText(getLastChildElement(contentEditableElement))) {
            contentEditableElement = getLastChildElement(contentEditableElement);
        }

        var range,selection;
        if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
        {    
            range = document.createRange();//Create a range (a range is a like the selection but invisible)
            range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
            range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
            selection = window.getSelection();//get the selection object (allows you to change selection)
            selection.removeAllRanges();//remove any selections already made
            selection.addRange(range);//make the range you have just created the visible selection
        }
        else if(document.selection)//IE 8 and lower
        { 
            range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
            range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
            range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
            range.select();//Select the range (make it the visible selection
        }
    }

}( window.cursorManager = window.cursorManager || {}));

