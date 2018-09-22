$(document).ready(function(){
	var callControlPanelButtton = $('.controlPanel__button'),
		controlPanelPopupActive	= $('.controlPanelPopup');

	callControlPanelButtton.click(function(){
		controlPanelPopupActive.addClass('controlPanelPopup_active');
	});
	
});