const mainMenu = document.querySelector(".main-menu__menu");
const body = document.querySelector("body");

document.addEventListener("click", function (event) {
	if (event.target.classList.contains("main-menu__burger") || event.target.classList.contains("burger__row")) {
		body.classList.toggle("_open-burger");
		if (body.classList.contains("_open-burger")) {
			mainMenu.style.height = window.innerHeight + window.pageYOffset + "px";
		} else {
			mainMenu.style.height = "";
		}
	} else if (body.classList.contains("_open-burger")) {
		if (!event.target.classList.contains("main-menu__menu") && !event.target.parentNode.classList.contains("main-menu__menu") && !event.target.parentNode.parentNode.classList.contains("main-menu__menu") && !event.target.parentNode.parentNode.parentNode.classList.contains("main-menu__menu")) {
			body.classList.remove("_open-burger");
			mainMenu.style.height = "";
		}
	}
});