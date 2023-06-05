window.onscroll = function() {stickyNavBar()};
var navbar = document.querySelector("nav");
var header = document.querySelector("header");
var sticky = header.offsetHeight;

function stickyNavBar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function menuToggle() {
	var navbar = document.getElementById("navbar");
	if (navbar.className === "") {
		navbar.className = "responsive";
	} else {
		navbar.className = "";
	}
}
