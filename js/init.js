$( document ).ready(function() {
	$('.name').addClass('animated fadeIn');
	$('.name').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		console.log("animation finished");
	});
});

