 var isMobile = function() {
    return (window.innerWidth <= 720);
};

var initScrollFire = function() {
    var options = [
        {selector: '.experience-ul', offset: 100, callback: 'Materialize.showStaggeredList(".experience-ul")'},
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

