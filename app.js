var form = document.querySelector("#form");
var input_name = document.querySelector("#name");
var input_last = document.querySelector("#last");
var input_email = document.querySelector("#email");
var input_passw = document.querySelector("#passw");

form.addEventListener("submit", function () {

	var name = document.querySelector("#name").value;
	var last = document.querySelector("#last").value;
	var email = document.querySelector("#email").value;
	var passw = document.querySelector("#passw").value;



	if (name.length==0) {
		input_name.style.borderColor = "red";
		input_name.style.backgroundImage = "url('images/icon-error.svg')";
		input_name.style.backgroundPosition = "350px";
		input_name.style.backgroundRepeat = "no-repeat";
	} else {
		input_name.style.borderColor = "var(--green)";
		name;
	}

	if (last.length==0) {
		
		input_last.style.borderColor = "red";
		input_last.style.backgroundImage = "url('images/icon-error.svg')";
		input_last.style.backgroundPosition = "350px";
		input_last.style.backgroundRepeat = "no-repeat";

	} else {
		input_last.style.borderColor = "var(--green)";
	}

	if (email.length==0 ||
	 !(email.includes("@gmail.com", -10) || email.includes("@hotmail.com") || email.includes("@outlook.com"))) {
		input_email.style.borderColor = "red";
		input_email.style.backgroundImage = "url('images/icon-error.svg')";
		input_email.style.backgroundPosition = "350px";
		input_email.style.backgroundRepeat = "no-repeat";

	} else {
		input_email.style.borderColor = "var(--green)";
	}

	if (passw.length==0) {
		
		input_passw.style.borderColor = "red";
		input_passw.style.backgroundImage = "url('images/icon-error.svg')";
		input_passw.style.backgroundPosition = "350px";
		input_passw.style.backgroundRepeat = "no-repeat";

	} else {
		input_passw.style.borderColor = "var(--green)";
	}
	
});