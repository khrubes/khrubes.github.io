// var animateName = function() {
//     var name = $( ".name" );
//     name.fadeIn(2000);
// };

// var thingsIAm = [
// "web developer",
// "computer science student",
// "hackathon organizer",
// "coffee snob",
// ];

// var thingsIndex = 0;

// var animateThingsIAm = function () {
//     thingsIndex = getThingsIndex();
//     var text = $( ".thingIAmText" );
//     text.fadeIn(1000, function(){
//         text.fadeOut(1000, function(){
//             text.html( thingsIAm[thingsIndex++] );
//             animateThingsIAm();
//         });
//     });   
// };

// var getThingsIndex = function(){
//     if(thingsIndex >= thingsIAm.length) {
//         thingsIndex = 0;
//     }
//     return thingsIndex;
// }


// $( document ).ready(function() {
//     animateName();
//     animateThingsIAm();
// });