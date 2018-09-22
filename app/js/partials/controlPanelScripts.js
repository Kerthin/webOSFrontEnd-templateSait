$(document).ready(function(){
	var callControlPanelButtton = $('.controlPanel'),
		controlPanelPopupActive	= $('.controlPanelPopup');

	callControlPanelButtton.click(function(){
		controlPanelPopupActive.addClass('controlPanelPopup_active');
	});
	
});