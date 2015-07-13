$(function(){
	$('.expander').click(function() {
		$(this).toggleClass('expanded');
		$('.main-menu').toggleClass('expanded');
	});

	$('.site').fitVids();
	$('a[href^="http"]').not('a[href*=startics]').attr('target','_blank');
});