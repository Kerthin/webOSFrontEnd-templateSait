function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

function timeBegan() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();

	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('timeDisplay').innerHTML = h + ":" + m;
	t = setTimeout(function() {
		timeBegan()
	}, 500);
}
timeBegan();