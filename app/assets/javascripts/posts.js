$(window).scroll(function() { 
if ($(this).scrollTop()> 100) { 
$('#wrapper').fadeIn(); 
} else { 
$('#wrapper').fadeOut(); 
} 
});
