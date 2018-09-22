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
	
});