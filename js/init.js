$( document ).ready(function() {
    animateThingsIAm();
});

// var isMobile = {
//     Android: function() {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function() {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function() {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function() {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function() {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function() {
//         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
//     }
// };

var thingsIAm = [
"a web developer",
"a computer science student",
"from Iowa",
"a hackathon organizer",
"a German speaker",
"a coffee snob",
];

var thingsIndex = 0;

var animateThingsIAm = function () {
    thingsIndex = (thingsIndex >= thingsIAm.length) ? 0 : thingsIndex;
    $( ".thingIAmText" ).fadeIn("slow", function(){
        $( ".thingIAmText" ).delay( 1000 );
        $( ".thingIAmText" ).fadeOut("slow", function(){
            $( ".thingIAmText" ).html( thingsIAm[thingsIndex++] );
            animateThingsIAm();
        });
    });   
};


