$(document).ready(function(){
	var callControlPanelButton = $('.controlPanel'),
		closeControlPanelButton = $('.controlPanelPopup__closeButton'),
		controlPanelPopupActive	= $('.controlPanelPopup');

	callControlPanelButton.click(function() {
		controlPanelPopupActive.addClass('controlPanelPopup_active');
	});

	closeControlPanelButton.click(function() {
		controlPanelPopupActive.removeClass('controlPanelPopup_active');
	});

	var circleIcon = $('.controlPanelPopup__circleIcon'),
		squareIcon = $('.controlPanelPopup__squareIcon'),
		verticalIcon = $('.controlPanelPopup__verticalIcon'),
		horizontalIcon = $('.controlPanelPopup__horizontalIcon');

	circleIcon.click(function() {
		$(this).toggleClass('controlPanelPopup__circleIcon_selected');
	});
	squareIcon.click(function() {
		$(this).toggleClass('controlPanelPopup__squareIcon_selected');
	});
	verticalIcon.click(function() {
		$(this).toggleClass('controlPanelPopup__verticalIcon_selected');
	});
	horizontalIcon.click(function() {
		$(this).toggleClass('controlPanelPopup__horizontalIcon_selected');
	});

	var swiperSlide = $('.swiper-slide'),
		dragUnlockButton = $('.js-controlPanelPopup__dragButton');

	dragUnlockButton.on('click', function () {
		// $(this).toggleClass('js-controlPanelPopup__dragButton_active');
		$(swiperSlide).toggleClass('falseSwiping');
	});

	var callImgChoiceButton = $('.js-controlPanelPopup__imgChoiceButton'),
		closeImgChoiceButton = $('.imgChoicePopup__closeButton'),
		imgChoicePopupActive = $('.imgChoicePopup');

	callImgChoiceButton.click(function() {
		imgChoicePopupActive.addClass('imgChoicePopup_active');
	});

	closeImgChoiceButton.click(function() {
		imgChoicePopupActive.removeClass('imgChoicePopup_active');
		callImgChoiceButton.toggleClass('controlPanelPopup__squareIcon_selected');
	});

	var animsitionOverlay = $('.animsition-overlay'),
		imgChoiceBg = $('.imgChoicePopup__img');

	imgChoiceBg.click(function() {
		var thisImg = $(this);
		var thisImgClasses = thisImg.attr('class').split(' ');
		var thisImgSecondClass = thisImgClasses[1];
		$(animsitionOverlay).removeClass();
		$(animsitionOverlay).addClass('animsition-overlay');
		$(animsitionOverlay).addClass(thisImgSecondClass);
	});

	var deleteNameAppButton = $('.js-controlPanelPopup__delNameButton'),
		nameApp = $('.desk__iconNameWrap'),
		iconWrap = $('.desk__iconWrap');

	deleteNameAppButton.click(function() {
		$(nameApp).toggleClass('desk__iconNameWrap_deleted');
		$(iconWrap).toggleClass('desk__iconWrap_size_icon');
	});

	var statusBarFullscreenButton = $('#fullscreenStatusBarButton'),
		controlPanelFullscreenButton = $('.js-controlPanelPopup__fullscreenButton')

	$(controlPanelFullscreenButton).attr('id', 'fullscreenControlPanelButton');

	statusBarFullscreenButton.click(function() {
		$(controlPanelFullscreenButton).toggleClass('controlPanelPopup__horizontalIcon_selected');
	});

	var enterFullscreen = function(el) {
		if(el.requestFullscreen) {
			el.requestFullscreen();
		} else if(el.msRequestFullscreen) {
			el.msRequestFullscreen();
		} else if(el.mozRequestFullScreen) {
			el.mozRequestFullScreen();
		} else if(el.webkitRequestFullscreen) {
			el.webkitRequestFullscreen();
		} else {
			noFullscreenSupport();
		}
	};

	var exitFullscreen = function() {
		if(document.exitFullscreen) {
			document.exitFullscreen();
		} else if(document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if(document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if(document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else {
			noFullscreenSupport();
		}
	};

	var noFullscreenSupport = function() {
		alert('Your browser does not support the Fullscreen API.');
	};

	var fullscreenButtons = document.getElementById('fullscreenControlPanelButton');
	var fullscreenButton = document.getElementById('fullscreenStatusBarButton');
	fullscreenButton.addEventListener('click', function(e) {
		e.preventDefault();
		if((window.innerWidth === screen.width && window.innerHeight === screen.height) || (window.fullScreen)) {
			exitFullscreen();
		} else {
			enterFullscreen(document.documentElement);
		}	
	});
	fullscreenButtons.addEventListener('click', function(e) {
		e.preventDefault();
		if((window.innerWidth === screen.width && window.innerHeight === screen.height) || (window.fullScreen)) {
			exitFullscreen();
		} else {
			enterFullscreen(document.documentElement);
		}	
	});
	
});