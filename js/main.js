$navLink = $('.nav-link');
$arrow = $('.nav-arrow');
$header = $('.header')

$(function() {
	$('.match').matchHeight();
});
function navToggle() {
    var $toggle = $(".nav-toggle");
    var $navigation = $(".navigation");
    var $icon = $('.nav-toggle-icon');

    $toggle.on('click', function() {
        $navigation.toggleClass('nav-show');
        $icon.toggleClass('nav-toggle-active');
    })
}


$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
       $header.addClass('color-change');
    } 
    if ($(this).scrollTop() < 50) {
       $header.removeClass('color-change');
    } 
});


function show() {
    var $miniImg = $(".mini-img-src");
    var $target = $(".item-img-src");
    $miniImg.on('mouseover', function() {
        var imgSrc = $(this).data('src');
        var $prom = $(this).closest('.item-img').find('.item-img-src');
        $prom.attr('style', 'background-image: url(' + imgSrc + ');');
    })
    $(".item-img").on('mouseout', function() {
        var imgSrc = $(this).find($target).data('img');
        $(this).find($target).attr('style', 'background-image: url(' + imgSrc + ');');
    })
}


function nav() {
    var $navigation = $(".navigation");
	var $navLink = $('.main-nav-link');
    var $section = $('.main-js-section');
    var $icon = $('.nav-toggle-icon');

	$navLink.each(function(i) {
		var $this = $(this);
		$this.attr('data-scrollsec-index', i);
	});
	$section.each(function(i) {
		$(this).attr('data-scrollsec-index', i);
	});

	$navLink.on('click', function() {
		var index = $(this).data('scrollsec-index');
        var sectionOffset = $('.main-js-section[data-scrollsec-index="'+ index + '"]').offset().top - 90;
        $('html,body').stop().animate({scrollTop: sectionOffset}, 900);
        $navigation.toggleClass('nav-show');
        $icon.toggleClass('nav-toggle-active');
	});
}


function subNav() {
    var $navLink = $('.nav-link');
    var $subNav = $('.sub-nav');

    $navLink.each(function(i) {
		var $this = $(this);
		$this.attr('data-index', i);
	});
	$subNav.each(function(i) {
		$(this).attr('data-index', i);
    });
    
    $navLink.on('click', function() {
        var index = $(this).data('index');
        $('.sub-nav[data-index="'+ index + '"]').toggleClass('sub-nav-show');
    })
}


function subList() {
    var $subTitle = $('.sub-title');
    var $subList = $('.sub-list');

    $subTitle.each(function(i) {
		var $this = $(this);
		$this.attr('data-index', i);
	});
	$subList.each(function(i) {
		$(this).attr('data-index', i);
    });
    
    $subTitle.on('click', function() {
        var index = $(this).data('index');
        $('.sub-list[data-index="'+ index + '"]').toggleClass('sub-list-show');
    })
}


function tabs() {
    var $tabLink = $('.items-list-link');
    var $tabSection = $('.tab-section');
    var loaded = false;
    
    $tabLink.each(function(i) {
		var $this = $(this);
		$this.attr('data-index', i);
    });
    $tabSection.each(function(i) {
		var $this = $(this);
		$this.attr('data-index', i);
    });

	$tabLink.on('click', function() {
		var index = $(this).data('index');
		$tabLink.removeClass('tab-open');
		$(this).addClass('tab-open');
		$tabSection.stop().hide();
		$(this).closest('.wrapper').find('.tab-section[data-index="'+ index +'"]').show();
	});

	$(window).on('load', function() {
		if(loaded === false) {
			$tabLink.first().click();
			loaded = true;
		}
	});
}


//////////////////////////
navToggle();
show();
nav();
subNav();
subList();
tabs();