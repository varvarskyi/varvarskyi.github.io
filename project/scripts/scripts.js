

const btn = document.getElementById("btn");
const span = document.getElementById("btntex");

btn.addEventListener('mouseover', (event) => 
{
  
  span.style.color = '#8D81AC';
  span.style.background = 'white';

  btn.style.background = 'white';
  span.style.background = 'white';
});

btn.addEventListener('mouseout', (event) => {
  event.target.style.background = '#8D81AC '
  span.style.background = '#8D81AC';

  span.style.color = 'white';
  span.style.background = '#8D81AC';
  
});

$(document).ready(function(){
	$('.navbar-mobile-menu-button').click(function(){
		$(this).toggleClass('open');
        $('.navbar-container').toggleClass('open')
        $('.mobile-menu-container').toggleClass('open')
	});
});




