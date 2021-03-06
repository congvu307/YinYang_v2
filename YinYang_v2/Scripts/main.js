﻿window.addEventListener('wheel', function (e) {
    if (e.deltaY < 0) {
        console.log('scrolling up');
    }
    if (e.deltaY > 0) {
        console.log('scrolling down');
    }
});
// credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
function swipedetect(el, callback){
  
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}
  
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
  
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
  
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}
  
//USAGE:

var el = document.getElementsByClassName('portfolio--info-box');

var listNav = document.getElementsByClassName('navigation__item');
$.each(el, function (i, item) {
    swipedetect(item, function (swipedir) {
        // swipedir contains either "none", "left", "right", "top", or "down"
        if (swipedir == 'up') {
            var id = $(item).data('key') + 1;
            var id_click = "#navigation__item--" + id;
            $(id_click).trigger('click');
        }
        if (swipedir == 'down') {
            var id = $(item).data('key') - 1;
            var id_click = "#navigation__item--" + id;
            $(id_click).trigger('click');
        }

    });
});
//swipedetect(el, function(swipedir){
//    // swipedir contains either "none", "left", "right", "top", or "down"
//    alert("abc");
//});


$(document).ready(function () {
    setTimeout(function () {
        $('.yy-wrapper').fadeOut()
    }, 4000);
});
$('.carousel').carousel({
    interval: false
}); 
function goToDropdown(item) {
    $('.dropdown-menu').removeClass('dropdown-menu__active');
    var id_click = "#navigation__item--" + $(item).data('key');
    $(id_click).trigger('click');
}