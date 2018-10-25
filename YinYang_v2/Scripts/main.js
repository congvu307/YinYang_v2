window.addEventListener('wheel', function (e) {
    if (e.deltaY < 0) {
        alert("abc");
        console.log('scrolling up');
    }
    if (e.deltaY > 0) {
        console.log('scrolling down');
    }
});


$(document).ready(function () {
    setTimeout(function () {
        $('.yy-wrapper').fadeOut()
    }, 3000);
});