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

	// var animsitionBody = $('.animsition-overlay');
	// var statusBarButton = $('.statusBar_button');

	// animsitionBody.on('click', function () {
	// 	$(this).removeClass();
	// 	$(this).addClass('animsition-overlay');
	// 	$(this).addClass('lookingGood');
	// }); 
	
});