document.body.onload = function () {
	setTimeout(function() {
		var preloader = document.getElementById('pagePreloader');
		if ( !preloader.classList.contains('preloader_hide') ) {
			preloader.classList.add('preloader_hide');
		}
	}, 3000)
}