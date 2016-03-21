$( document ).ready(function() {
 
Reveal.slide(0);
var firstTab = $($('li')[0]);
firstTab.addClass('active');
firstTab.focus();
 
Reveal.addEventListener( 'slidechanged', function( event ) {
    $('.active').removeClass('active');
    var currentTab = $(($('nav ul')[0]).children[event.indexh]);
    currentTab.addClass('active');
} );


$('li').on('hover', function(){
  $('li').removeClass('active');
  $(this).addClass('active');
});



$('li').click(function(event) {
  Reveal.slide($(this).index());
});

$('nav li').each(function(index, element){
  		$(element).mouseover(function() {
  			//$(".navbar-slide").css("left", calculateSlideLeft(index, element) + "vw");
  			$(element).toggleClass('active');
		});
});

$('.learn-more-button').click(function(){
  Reveal.down();
});

//d3 chart

var data = [
{value:90, skill:"Java"}, 
{value:70, skill:"HTML"}, 
{value:70, skill:"CSS"}, 
{value:60, skill:"JavaScript"}, 
{value:60, skill:"jQuery"},
{value:50, skill:"PHP"}, 
{value:45, skill:"C++"}, 
{value:40, skill:"C"},
{value:40, skill:"MySQL"} 
];

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return (d.value + "%"); })
    .text(function(d) { return d.skill; });



});


