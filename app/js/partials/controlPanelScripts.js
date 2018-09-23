$(document).ready(function(){
	var callControlPanelButton = $('.controlPanel'),
		closeControlPanelButton = $('.controlPanelPopup__closeButton'),
		controlPanelPopupActive	= $('.controlPanelPopup');

	callControlPanelButton.click(function(){
		controlPanelPopupActive.addClass('controlPanelPopup_active');
	});

	closeControlPanelButton.click(function(){
		controlPanelPopupActive.removeClass('controlPanelPopup_active');
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

	callImgChoiceButton.click(function(){
		imgChoicePopupActive.addClass('imgChoicePopup_active');
	});

	closeImgChoiceButton.click(function(){
		imgChoicePopupActive.removeClass('imgChoicePopup_active');
	});

	var animsitionOverlay = $('.animsition-overlay');

	var imgChoiceBg = $('.imgChoicePopup__img');

	imgChoiceBg.click(function(){
		var thisImg = $(this);
		var thisImgClasses = thisImg.attr('class').split(' ');
		var thisImgSecondClass = thisImgClasses[1];
		$(animsitionOverlay).removeClass();
		$(animsitionOverlay).addClass('animsition-overlay');
		$(animsitionOverlay).addClass(thisImgSecondClass);
	});
	
});