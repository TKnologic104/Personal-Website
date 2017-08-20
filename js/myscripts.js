$(function() {
	var $l = $('.carousel-left'),
		$c = $('.carousel-center'),
		$r = $('.carousel-right');

	var $l1 = $('.carousel-left-1'),
		$c1 = $('.carousel-center-1'),
		$r1 = $('.carousel-right-1');

	var $l2 = $('.carousel-left-2'),
		$c2 = $('.carousel-center-2'),
		$r2 = $('.carousel-right-2');

	var $l3 = $('.carousel-left-3'),
		$c3 = $('.carousel-center-3'),
		$r3 = $('.carousel-right-3');

	var $l4 = $('.carousel-left-4'),
		$c4 = $('.carousel-center-4'),
		$r4 = $('.carousel-right-4');



	$l.carouFredSel({
		auto: false,
		items: 1,
		direction: 'right',
		prev: {
			button: '.prev',
			fx: 'uncover',
			onBefore: function() {
				console.log("the left image should move");
				setTimeout(function() {
					$c.trigger( 'prev' );
				}, 100);
			}
		},
		next: {
			fx: 'cover'
		}
	});

	$c.carouFredSel({
		auto: false,
		items: 1,
		prev: {
			onBefore: function() {
				setTimeout(function() {
					$r.trigger( 'prev' );
				}, 100);
			}
		},
		next: {
			onBefore: function() {
				setTimeout(function() {
					$l.trigger( 'next' );
				}, 100);
			}
		}
	});

	$r.carouFredSel({
		auto: false,
		items: 1,
		prev: {
			fx: 'cover'
		},
		next: {
			button: '.next',
			fx: 'uncover',
			onBefore: function() {
				setTimeout(function() {
					$c.trigger( 'next' );
				}, 100);
			}
		}
	});


	/* 1st Carousel - Anonymous Advice */

	$l1.carouFredSel({
		auto: false,
		items: 1,
		direction: 'right',
		prev: {
			button: '.prev-1',
			fx: 'uncover',
			onBefore: function() {
				console.log("the left image should move");
				setTimeout(function() {
					$c1.trigger( 'prev' );
				}, 100);
			}
		},
		next: {
			fx: 'cover'
		}
	});



	$c1.carouFredSel({
		auto: false,
		items: 1,
		prev: {
			onBefore: function() {
				setTimeout(function() {
					$r1.trigger( 'prev' );
				}, 100);
			}
		},
		next: {
			onBefore: function() {
				setTimeout(function() {
					$l1.trigger( 'next' );
				}, 100);
			}
		}
	});


	$r1.carouFredSel({
		auto: false,
		items: 1,
		prev: {
			fx: 'cover'
		},
		next: {
			button: '.next-1',
			fx: 'uncover',
			onBefore: function() {
				setTimeout(function() {
					$c1.trigger( 'next' );
				}, 100);
			}
		}
	});


	/* 2nd carousel  - Wubba */

	$l2.carouFredSel({
		auto: false,
		items: 1,
		direction: 'right',
		prev: {
			button: '.prev-2',
			fx: 'uncover',
			onBefore: function() {
				console.log("the left image should move");
				setTimeout(function() {
					$c2.trigger( 'prev' );
				}, 100);
			}
		},
		next: {
			fx: 'cover'
		}
	});



	$c2.carouFredSel({
		auto: false,
		items: 1,
		prev: {
			onBefore: function() {
				setTimeout(function() {
					$r2.trigger( 'prev' );
				}, 100);
			}
		},
		next: {
			onBefore: function() {
				setTimeout(function() {
					$l2.trigger( 'next' );
				}, 100);
			}
		}
	});


	$r2.carouFredSel({
		auto: false,
		items: 1,
		prev: {
			fx: 'cover'
		},
		next: {
			button: '.next-2',
			fx: 'uncover',
			onBefore: function() {
				setTimeout(function() {
					$c2.trigger( 'next' );
				}, 100);
			}
		}
	});

	/* 3rd - Guitar teaching tool*/

	$l3.carouFredSel({
		auto: false,
		items: 1,
		direction: 'right',
		prev: {
			button: '.prev-3',
			fx: 'uncover',
			onBefore: function() {
				console.log("the left image should move");
				setTimeout(function() {
					$c3.trigger( 'prev' );
				}, 100);
			}
		},
		next: {
			fx: 'cover'
		}
	});



	$c3.carouFredSel({
		auto: false,
		items: 1,
		prev: {
			onBefore: function() {
				setTimeout(function() {
					$r3.trigger( 'prev' );
				}, 100);
			}
		},
		next: {
			onBefore: function() {
				setTimeout(function() {
					$l3.trigger( 'next' );
				}, 100);
			}
		}
	});


	$r3.carouFredSel({
		auto: false,
		items: 1,
		prev: {
			fx: 'cover'
		},
		next: {
			button: '.next-3',
			fx: 'uncover',
			onBefore: function() {
				setTimeout(function() {
					$c3.trigger( 'next' );
				}, 100);
			}
		}
	});

	/* 4th carousel -  Saloon */

	$l4.carouFredSel({
		auto: false,
		items: 1,
		direction: 'right',
		prev: {
			button: '.prev-4',
			fx: 'uncover',
			onBefore: function() {
				console.log("the left image should move");
				setTimeout(function() {
					$c4.trigger( 'prev' );
				}, 100);
			}
		},
		next: {
			fx: 'cover'
		}
	});



	$c4.carouFredSel({
		auto: false,
		items: 1,
		prev: {
			onBefore: function() {
				setTimeout(function() {
					$r4.trigger( 'prev' );
				}, 100);
			}
		},
		next: {
			onBefore: function() {
				setTimeout(function() {
					$l4.trigger( 'next' );
				}, 100);
			}
		}
	});


	$r4.carouFredSel({
		auto: false,
		items: 1,
		prev: {
			fx: 'cover'
		},
		next: {
			button: '.next-4',
			fx: 'uncover',
			onBefore: function() {
				setTimeout(function() {
					$c4.trigger( 'next' );
				}, 100);
			}
		}
	});

});

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";

  document.getElementById("img02").src = element.src;
  document.getElementById("modal02").style.display = "block";

  document.getElementById("img03").src = element.src;
  document.getElementById("modal03").style.display = "block";

  document.getElementById("img04").src = element.src;
  document.getElementById("modal04").style.display = "block";

  document.getElementById("img05").src = element.src;
  document.getElementById("modal05").style.display = "block";
}

$(document).ready(function(){
var selector = '.nav li';

	$(selector).on('click', function(){
	    $(selector).removeClass('active');
	    $(this).addClass('active');
	});
});

$(document).ready(function () {
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 45
         }, 900, 'swing', function () {
             window.location.hash = target;
         });
     });
 });

// Increase Z index for Project 0

$(document).ready(function () {
	var selected = '.carousel-center';
	var selected2 = '.caroufredsel_wrapper';

	$(selected).on('click',function (){
		//$('caroufredsel_wrapper').style('z-index', '8', 'important');
		//$(selected2).addClass('Zup');
		//$(selected2).removeClass('Zdown');
		//$(selected).css('z-index','20');
		//$('caroufredsel_wrapper').css('z-index', '3');
		$('.wrapper').removeClass('Zdown');
		$('.wrapper').addClass('Zup');
	});
});

//-------------------------------------
// Increase Z index for project 1

$(document).ready(function () {
	var selected = '.carousel-center-1';

	$(selected).on('click',function (){
		//$('caroufredsel_wrapper').css('z-index', '4');
		//$(selected).addClass('Zup');
		//$(selected).css('z-index','20');
		$('.wrapper-1').removeClass('Zdown');
		$('.wrapper-1').addClass('Zup');
	});
});

//===================================
// Increase Z index for project 2

$(document).ready(function () {
	var selected = '.carousel-center-2';

	$(selected).on('click',function (){
		$('.wrapper-2').removeClass('Zdown');
		$('.wrapper-2').addClass('Zup');
	});
});

//====================================
// Increase Z index for project 3

$(document).ready(function () {
	var selected = '.carousel-center-3';

	$(selected).on('click',function (){
		$('.wrapper-3').removeClass('Zdown');
		$('.wrapper-3').addClass('Zup');
	});
});

//====================================
// Increase Z index for project 4

$(document).ready(function () {
	var selected = '.carousel-center-4';

	$(selected).on('click',function (){
		$('.wrapper-4').removeClass('Zdown');
		$('.wrapper-4').addClass('Zup');
	});
});

//====================================
//Remove Z index from Project 0

$(document).ready(function () {
	var finished = '.w3-modal';
	var selected = '.carousel-center';

	$(finished).on('click', function (e){
		$('.wrapper').removeClass('Zup');
		$('.wrapper').addClass('Zdown');
		//$(selected).css('z-index', "4");
		e.stopPropagation();
	});
});

//====================================
// Remove Z index from Project 1

$(document).ready(function () {
	var finished = '.w3-modal';
	var selected = '.carousel-center-1';

	$(finished).on('click', function (e){
		$('.wrapper-1').removeClass('Zup');
		$('.wrapper-1').addClass('Zdown');
		//$('caroufredsel_wrapper').css('z-index', "0");
		//$(selected).css('z-index', "");
		e.stopPropagation();
	});
});

//======================================
// Remove Z index from Project 2

$(document).ready(function () {
	var finished = '.w3-modal';
	var selected = '.carousel-center-2';

	$(finished).on('click', function (e){
		$('.wrapper-2').removeClass('Zup');
		$('.wrapper-2').addClass('Zdown');
		e.stopPropagation();
	});
});

//=====================================
// Remove Z index from Project 3

$(document).ready(function () {
	var finished = '.w3-modal';
	var selected = '.carousel-center-3';

	$(finished).on('click', function (e){
		$('.wrapper-3').removeClass('Zup');
		$('.wrapper-3').addClass('Zdown');
		e.stopPropagation();
	});
});

//======================================
// Remove Z index from Project 4

$(document).ready(function () {
	var finished = '.w3-modal';
	var selected = '.carousel-center-4';

	$(finished).on('click', function (e){
		$('.wrapper-4').removeClass('Zup');
		$('.wrapper-4').addClass('Zdown');
		e.stopPropagation();
	});
});







//======================================
/* testing getting element by class*/

// $(function(wrapper2) {
// 	var $l = getElementsByClassName('#carousel-left'),
// 		$c = $('#carousel-center'),
// 		$r = $('#carousel-right');
		
// 	$l.carouFredSel({
// 		auto: false,
// 		items: 1,
// 		direction: 'right',
// 		prev: {
// 			button: '#prev',
// 			fx: 'uncover',
// 			onBefore: function() {
// 				setTimeout(function() {
// 					$c.trigger( 'prev' );
// 				}, 100);
// 			}
// 		},
// 		next: {
// 			fx: 'cover'
// 		}
// 	});
// 	$c.carouFredSel({
// 		auto: false,
// 		items: 1,
// 		prev: {
// 			onBefore: function() {
// 				setTimeout(function() {
// 					$r.trigger( 'prev' );
// 				}, 100);
// 			}
// 		},
// 		next: {
// 			onBefore: function() {
// 				setTimeout(function() {
// 					$l.trigger( 'next' );
// 				}, 100);
// 			}
// 		}
// 	});
// 	$r.carouFredSel({
// 		auto: false,
// 		items: 1,
// 		prev: {
// 			fx: 'cover'
// 		},
// 		next: {
// 			button: '#next',
// 			fx: 'uncover',
// 			onBefore: function() {
// 				setTimeout(function() {
// 					$c.trigger( 'next' );
// 				}, 100);
// 			}
// 		}
// 	});
// });
