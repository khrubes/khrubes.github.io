 var isMobile = function() {
    return (window.innerWidth <= 720);
};

var toggleHoverTextBySelector = function(selector) {
    $(selector).fadeIn(2000);
};

/** Once the DOM is ready. */
$( document ).ready(function(){
    $('.button-collapse').sideNav({
      closeOnClick: true 
    });

    if (!isMobile()) {
        $('.parallax').parallax();
    } else {
        $('.parallax-container').removeClass('parallax-container');
        $('.parallax').removeClass('parallax');
    }
});



/** Once everything, including images, is ready */
$( window ).load(function() {
    var scrollfireManager = new ScrollFireManager();
    scrollfireManager.initScrollFire();
});



$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});