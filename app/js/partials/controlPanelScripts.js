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
	
});