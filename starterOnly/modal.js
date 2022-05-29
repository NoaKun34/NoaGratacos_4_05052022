function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locations = document.querySelectorAll("input[type=radio]");
const rules = document.getElementById("checkbox1");
const submit = document.querySelectorAll(".btn-submit");
const errorFirst = document.getElementById("errorFirstname");
const errorLast = document.getElementById("errorLastname");
const errorEmail = document.getElementById("errorEmail");
const errorBirthdate = document.getElementById("errorBirthdate")
const errorLocation = document.getElementById("errorLocation");
const errorRules = document.getElementById("errorRules");
const errorQuantity = document.getElementById("errorQuantity");
const validationModalbg = document.querySelector(".validationBground");

// errorCounter
let errorCounter = 0;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalClose.forEach((close) => close.addEventListener("click", closeModal));

//Launch form validation
modalValidation.forEach((validationForm) => btn.addEventListener("click", validationForm))

// launch modal form
function launchModal() {
	modalbg.style.display = "block";
}

function closeModal() {
	modalbg.style.display = "none";
	validationModalbg.style.display = "none";
}

function displayErrorMessage(input) {
	input.classList.add("errorMessageDisplayed");
	errorCounter++;
}

function validationForm() {
	nameValidation();
	emailValidation();
	birthdateValidation();
	quantityValidation();
	locationValidation();
	rulesValidation();
	if (errorCounter > 0) {
		errorCounter = 0;
	} else if (errorCounter == 0) {
		modalbg.style.display = "none";
		validationModalbg.style.display = "block";
	}
}

function nameValidation() {
	if (firstname.value == "" || firstname.value == null) {
		displayErrorMessage(errorFirst);
	}
	if (lastname.value == "" || lastname.value == null) {
		displayErrorMessage(errorLast);
	}
}

function emailValidation() {

	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (email.value.match(validRegex)) {
		return true;
	} else {
		displayErrorMessage(errorEmail);
	}
}

function birthdateValidation() {
	if (birthdate.value == "" || birthdate.value == null) {
		displayErrorMessage(errorBirthdate);
	}
}

function quantityValidation() {
	if (quantity.value < 0 || quantity.value == null || quantity.value == "") {
		displayErrorMessage(errorQuantity)
	} 
}

function rulesValidation() {
	if (!rules.checked) {
		displayErrorMessage(errorRules);
	}
}

function locationValidation() {
	let isChecked = false;
	locations.forEach((current) =>{
		if (current.checked) {
			isChecked = true;
		}
	})
	if (!isChecked) {
		displayErrorMessage(errorLocation);
	} 
}