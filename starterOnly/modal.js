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
 * Functiun to launch the modal
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
}

/**
 * Function for hide error message
 * @param {string} input 
 */
function hideErrorMessage(input) {
	input.classList.remove("errorMessageDisplayed");
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
	}
}

/**
 * Validation function for first and last name fields
 */
function firstnameValidation() {
	if (firstname.value == "" || firstname.value == null || firstname.value.length < 2) {
		displayErrorMessage(errorFirst);
	} else {
		hideErrorMessage(errorFirst);
	}
}

function lastnameValidation() {
	if (lastname.value == "" || lastname.value == null || lastname.value.length < 2) {
		displayErrorMessage(errorLast);
	} else {
		hideErrorMessage(errorLast);
	}
}

/**
 * Mail field validation function
 */
function emailValidation() {

	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (email.value.match(validRegex)) {
		hideErrorMessage(errorEmail);
		return true;
	} else {
		displayErrorMessage(errorEmail);
	}
}

/**
 * Date of birth field validation function
 */
function birthdateValidation() {
	if (birthdate.value == "" || birthdate.value == null) {
		displayErrorMessage(errorBirthdate);
	} else {
		hideErrorMessage(errorBirthdate);
	}
}

/**
 * Quantity field validation function
 */
function quantityValidation() {
	if (quantity.value < 0 || quantity.value == null || quantity.value == "") {
		displayErrorMessage(errorQuantity)
	} else {
		hideErrorMessage(errorQuantity);
	}
}

/**
 * Condition field validation function
 */
function rulesValidation() {
	if (!rules.checked) {
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
	if (!isChecked) {
		displayErrorMessage(errorLocation);
	} else {
		hideErrorMessage(errorLocation);
	}
}