$(document).ready(function(){
	mainRingResize();
});

$(window).resize(function(){
	mainRingResize();
});

function mainRingResize(){
	var headerHeight = $('header').height();
	var footerHeight = $('footer').height();
	var mainRingHeight = $(window).height() - headerHeight - footerHeight;
	// alert(headerHeight);
	$('.mainRing').css({"width":mainRingHeight+"px","height":mainRingHeight+"px", "margin-top":headerHeight+"px"});
}

$('.subsectionTrigger').on('click', function(){
	let formerClass = $('body').attr('class');
	let newClass = $(this).attr('data-subsection');

	if(formerClass !== undefined){
		$('body').removeClass(formerClass);
	}
	if($('header li.active').attr('data-subsection') !== newClass){
		$('header li.active').removeClass('active');
		$('header li[data-subsection="'+newClass+'"]').addClass('active');

		$('.subRing.active').removeClass('active');
		$('.subRing[data-subsection="'+newClass+'"]').addClass('active');
	}

	$('body').addClass(newClass);
});
