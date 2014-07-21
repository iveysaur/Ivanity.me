var icon = document.getElementById('icon');
var height = icon.clientHeight;

function scroll(e) {
	var currentScroll = window.scrollY;
	if (currentScroll >= 0 && currentScroll <= 76) {
		height = 150 - currentScroll;
	} else if (currentScroll < 0) {
		height = 150;
	} else if (currentScroll > 150) {
		height = 75;
	}
	icon.style.height = height + 'px';
	icon.style.width = height + 'px';
}

window.onscroll = scroll;

