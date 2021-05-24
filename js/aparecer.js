var lastPositionScrollTop = 0;

/***
 * Appear and disappear the header depends the
 * position of the Scroll
 */
$(window).scroll(function () {
    var position = $(this).scrollTop();
    if (position < lastPositionScrollTop){
        $('.header').fadeIn("slow");
    } else {
        $('.header').fadeOut("slow");
    }
    lastPositionScrollTop = position;
});