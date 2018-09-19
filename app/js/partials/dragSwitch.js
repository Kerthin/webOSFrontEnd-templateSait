var statusBarButton = $('.statusBar_button');
var swiperSlide = $('.swiper-slide');

statusBarButton.on('click', function () {
	$(this).toggleClass('active');
	$(swiperSlide).toggleClass('falseSwiping');
});