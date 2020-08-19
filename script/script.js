$('.menu__burger').click(function() {
	$('.menu__block').toggleClass('menu__block--active');
	$('body').toggleClass('lock');
	$('.burger__bar1').toggleClass('burger__bar1--active');
	$('.burger__bar2').toggleClass('burger__bar2--active');
	$('.burger__bar3').toggleClass('burger__bar3--active');
	$('.burger__bar4').toggleClass('burger__bar4--active');
});
// $('.form__input').click(function() {
// 	// $('.form__input').next().not($(this).next()).css("display", "block");
// 	// $(this).next().css("display", "none");
// 		// $('.form__input').next().not($(this).next()).animate({fontSize: "15px", top: "20px", left: "18px"}, 200);
// 		// $(this).next().animate({fontSize: "10px", top: "10px", left: "10px"}, 200);
// 	});
// 	

//кнопка scrollBackTop
$(window).scroll(function() {
	if ($(window).scrollTop() > 500) {
		$('.scrollUp').addClass('scrollUp--show');
	}else {
		$('.scrollUp').removeClass('scrollUp--show');
	}
})
$('.scrollUp').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, 300);
});

//параллакс эффект фона header
$(window).scroll(function() {
	var s = $(this).scrollTop()/1.3;
	// console.log(s);
	$('.header').css('background-position', 'center '+s+'px');
	$
})
//плавная прокрутка вниз при нажатии на кнопку scrollDown
$(document).ready(function() {
	$('.arrow__link').click(function() {
		elementClick = $(this).attr('href');
		destination = $(elementClick).offset().top;
		$('body, html').animate({scrollTop: destination}, 700);
	});
});

//анимация при скролле
const animItems = document.querySelectorAll('._anim-item');
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			}else {
				if ( !animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset (el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 500);
	
}

