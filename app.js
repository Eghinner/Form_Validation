const 	form 	= document.querySelector("#form"),
input_name 	= document.querySelector("#name"),
input_last 	= document.querySelector("#last"),
input_email = document.querySelector("#email"),
input_passw = document.querySelector("#passw");

form.addEventListener("submit", function (e) {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const name = input_name.value.trim();
	const last = input_last.value.trim();
	const email = input_email.value.trim();
	const passw = input_passw.value.trim();

	// Valid Name
	if (name.length == 0) {
		setErrorFor(input_name);
	} else {
		setSuccessFor(input_name);
	}
	// Valid Last Name
	if (last.length==0) {
		setErrorFor(input_last);
	} else {
		setSuccessFor(input_last);
	}
	// Valid email with regex
	if (email.length==0) {
		setErrorFor(input_email);
	}	else if (!IsEmail(email)){
		setErrorFor(input_email);
	}	else {
		setSuccessFor(input_email);
	}
	// Valid password with regex (password>=8 && [A-Za-z] && [0-9] && [@$!%#-?&])
	if (passw.length==0) {
		setErrorFor(input_passw);
	}	else if (!IsPassw(passw)){
		setErrorFor(input_passw);
	}	else {
		setSuccessFor(input_passw);
	}
};




function IsEmail(email) {
	return /^[a-z0-9]+\.?\w*@[a-z]+(\.\w{2,3})?\.\w{2,4}$/.test(email);
}

function IsPassw(password) {
	return /^(?=.*\d)(?=.*[!@#$%^&*\-])(?=.*\w).{8,}$/.test(password);
}

// -----------------------------

function setErrorFor(input) {
	// const formControl = input.parentElement;
	// const small = formControl.querySelector('small');
	// formControl.className = 'form-control error';
	// small.innerText = message;

	input.style.borderColor = "red";
	input.style.backgroundImage = "url('images/icon-error.svg')";
	input.style.backgroundPosition = "95% 50%";
	input.style.backgroundRepeat = "no-repeat";
}

function setSuccessFor(input) {
	// const formControl = input.parentElement;
	// formControl.className = 'form-control success';
	input.style.borderColor = "var(--green)";
}