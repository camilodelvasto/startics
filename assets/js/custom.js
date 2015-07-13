$(function(){
	$('.expander').click(function() {
		$(this).toggleClass('expanded');
		$('.main-menu').toggleClass('expanded');
	});

	$('.site').fitVids();
	$('a[href^=http]:not([href^=http://www.startics.com],[href^=http://vc.startics.com])')
              .add('a[href^=www]:not([href^=vc.startics.com])')
              .attr('target','_blank');
});