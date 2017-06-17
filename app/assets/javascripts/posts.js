$(window).scroll(function() { 
if ($(this).scrollTop()> 100) { 
$('.post.hvr-grow.boxy').addClass('flipInX');
} if else < 100 { 
$('.post.hvr-grow.boxy').addClass('flipOutX');
} 
else {
$('.post.hvr-grow.boxy').addClass('flipInX');	
}
});


