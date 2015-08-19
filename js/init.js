 var isMobile = function() {
    return (window.innerWidth <= 720);
};

var toggleInternHacksHoverText = function() {
    $(".internhacks-parallax-text-wrapper").fadeIn(2000);
};

var initScrollFire = function() {
    var options = [
        {selector: '.parallax', offset: 200, callback: 'toggleInternHacksHoverText()'},
        {selector: '.experience-ul', offset: 200, callback: 'Materialize.showStaggeredList(".experience-ul")'},
    ];
    Materialize.scrollFire(options);
};

/** Once the DOM is ready. */
$( document ).ready(function(){
    $(".button-collapse").sideNav();
    if (!isMobile()) {
        $('.parallax').parallax();
    } else {
        $('.parallax-container').removeClass('parallax-container');
        $('.parallax').removeClass('parallax');
    }
});


/** Once everything, including images, is ready */
$( window ).load(function() {
    $(".splash-text").fadeIn(1500);
    initScrollFire();
});



