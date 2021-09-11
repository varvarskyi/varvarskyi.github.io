$(document).ready(function(){
	$('.navbar-mobile-menu-button').click(function(){
		$(this).toggleClass('open');
        $('.navbar-container').toggleClass('open')
        $('.mobile-menu-container').toggleClass('open')
	});
});




