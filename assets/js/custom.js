$(function(){
	$('.expander').click(function() {
		$(this).toggleClass('expanded');
		$('.main-menu').toggleClass('expanded');
	});

	$('.site').fitVids();

	//make all external links open on a new window
	$('a[href^="http"]').not('a[href*=startics]').attr('target','_blank');
});