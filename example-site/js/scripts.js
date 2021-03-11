function validateForm(e) {
	var liveRegion = document.querySelector("[role='alert']");
	var paragraph = document.createElement("p");

	e.preventDefault();

	paragraph.textContent = "Dit is geen geldig emailadres: gebruik een @.";
	liveRegion.appendChild(paragraph);
}

var form = document.querySelector('form');
form.addEventListener("submit", validateForm);
