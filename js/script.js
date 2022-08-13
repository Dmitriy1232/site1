$(document).ready(function(){
	$('.fs_slider').slick({
		adaptiveHeight:true,
		autoplay:true,
		speed:4000,
		autoplaySpeed:4000,
		pauseOnFocus:false,
		pauseOnHover:false,
		centerMode:false,
		fade:false,
		arrows:true,
		waitForAnimate:true,
		cssEase:'ease',
		easing:'ease',
	});
	$('.service_skrin_slider').slick({
		slidesToShow: 3,
		variableWidth:true
	})
	$('.price_slider').slick({
		slidesToShow: 3,
		arrows:false,
		infinite: false,
	})
});
