$(document).ready(function(){
	var headerHeight = $('header').height();
	var footerHeight = $('footer').height();
	var mainRingHeight = $(window).height() - headerHeight - footerHeight;
	// alert(headerHeight);
	$('.mainRing').css({"width":mainRingHeight+"px","height":mainRingHeight+"px", "margin-top":headerHeight+"px"});
});
