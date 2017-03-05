$(document).ready(function(){
	mainRingResize();
});

$(window).resize(function(){
	mainRingResize();
});

function mainRingResize(){
	var headerHeight = $('header').height();
	var footerHeight = $('footer').height();
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	if(windowWidth > 600){
		if(windowHeight > windowHeight){
			var mainRingHeight = windowWidth - 50;
		}else{
			var mainRingHeight = windowHeight - headerHeight - footerHeight;
		}

		console.log("width: "+ windowWidth +", height: " + windowHeight +", mainRingHeight:" + mainRingHeight);
		$('.mainRing').css({"width":mainRingHeight+"px","height":mainRingHeight+"px", "margin-top":headerHeight+"px"});
	}
}

$('.subsectionTrigger').on('click', function(){
	let formerClass = $('body').attr('class');
	let newClass = $(this).attr('data-subsection');

	var image = new Image();
	image.src = "img/"+ newClass +"_background.jpg";

	image.onload = function(){
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
	}
});
