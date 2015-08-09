var animateName = function() {
    var name = $( ".name" );
    name.fadeIn(2000);
};

var thingsIAm = [
"web developer",
"computer science student",
"hackathon organizer",
"coffee snob",
];

var thingsIndex = 0;

var animateThingsIAm = function () {
    thingsIndex = (thingsIndex >= thingsIAm.length) ? 0 : thingsIndex;
    var text = $( ".thingIAmText" );
    text.fadeIn(thingsIndex == 0 ? 600 : 1000, function(){
        text.fadeOut(1000, function(){
            text.html( thingsIAm[thingsIndex++] );
            animateThingsIAm();
        });
    });   
};


$( document ).ready(function() {
    animateName();
    animateThingsIAm();
});