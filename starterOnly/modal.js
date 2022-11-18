function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

/**
 * Dom element
 */
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.getElementById("form");
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
const errorBirthdate = document.getElementById("errorBirthdate");
const errorLocation = document.getElementById("errorLocation");
const errorRules = document.getElementById("errorRules");
const errorQuantity = document.getElementById("errorQuantity");
const validationModalbg = document.querySelector(".validationBground");

/**
 * Error counter variable for error handling
 */
let errorCounter = 0;

/**
 * Event for launch the modal
 */
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/**
 * Event for close the modal
 */
modalClose.forEach((close) => close.addEventListener("click", closeModal));

/**
 * Event for launch validation function
 */
submit.forEach((btn) => btn.addEventListener("click", validationForm));

/**
 * Function to launch the modal
 */
function launchModal() {
	modalbg.style.display = "block";
}

/**
 * Function to close the modal
 */
function closeModal() {
	modalbg.style.display = "none";
	validationModalbg.style.display = "none";
}

/**
 * List of blur events
 */
firstname.addEventListener("blur", firstnameValidation);
lastname.addEventListener("blur", lastnameValidation);
email.addEventListener("blur", emailValidation);
birthdate.addEventListener("blur", birthdateValidation);
quantity.addEventListener("blur", quantityValidation);
//locations.addEventListener("change", locationValidation);

/**
 * Error handling function
 * @param {string} input
 */
function displayErrorMessage(input) {
	input.classList.add("errorMessageDisplayed");
	errorCounter++;

	return false;
}

/**
 * Function for hide error message
 * @param {string} input 
 */
function hideErrorMessage(input) {
	input.classList.remove("errorMessageDisplayed");

	return true;
}

/**
 * Function for form validation
 */
function validationForm() {
	errorCounter = 0;
	firstnameValidation();
	lastnameValidation();
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
		form.reset();
	}
}

/**
 * Validation function for first and last name fields
 */
function firstnameValidation() {
	if (firstname.value == "" || firstname.value == null || firstname.value.length < 2) {
		return displayErrorMessage(errorFirst);
	}
	return hideErrorMessage(errorFirst);
}

function lastnameValidation() {
	if (lastname.value == "" || lastname.value == null || lastname.value.length < 2) {
		return displayErrorMessage(errorLast);
	}
	return hideErrorMessage(errorFirst);
}

/**
 * Mail field validation function
 */
function emailValidation() {

	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (email.value.match(validRegex)) {
		return hideErrorMessage(errorEmail);
	}
	return hideErrorMessage(errorFirst);
}

/**
 * Date of birth field validation function
 */
function birthdateValidation() {
	if (birthdate.value == "" || birthdate.value == null) {
		return displayErrorMessage(errorBirthdate);
	}
	return hideErrorMessage(errorFirst);
}

/**
 * Quantity field validation function
 */
function quantityValidation() {
	if (quantity.value < 0 || quantity.value == null || quantity.value == "") {
		return displayErrorMessage(errorQuantity)
	}
	return hideErrorMessage(errorFirst);
}

/**
 * Condition field validation function
 */
function rulesValidation() {
	if (rules.checked) {
		hideErrorMessage(errorRules);
	} else {
		displayErrorMessage(errorRules);
	}
}

/**
 * Location field validation function
 */
function locationValidation() {
	let isChecked = false;
	locations.forEach((current) =>{
		if (current.checked) {
			isChecked = true;
		}
	})
	if (isChecked) {
		return hideErrorMessage(errorFirst);
	} else {
		return displayErrorMessage(errorFirst);
	}
}