const submitInputs = document.querySelectorAll("input[type='submit']")

const nameInput = document.getElementById("nameInput")
const nameValidationMessage = document.querySelector(".nameValidation")
const nameErrorMessage = document.querySelector(".nameError")

const emailInputs = document.querySelectorAll("input[type='email']")
const emailValidationMessage = document.querySelectorAll(".emailValidation")
const emailErrorMessage = document.querySelectorAll(".emailError")

const messageInput = document.querySelector(".messageInput")
const messageValidationMessage = document.querySelector(".messageValidation")
const messageErrorMessage = document.querySelector(".messageError")

const passwordInputs = document.querySelectorAll("input[type='password']")
const passwordErrorMessage = document.querySelectorAll(".passwordError")
const passwordValidationMessage = document.querySelectorAll(".passwordValidation")

const samePasswordInput = document.getElementById("samePasswordInput")
const samePasswordErrorMessage = document.getElementById("samePasswordError")
const samePasswordValidationMessage = document.getElementById("samePasswordValidation")

const contactForm = document.getElementById("contactForm")
const loginForm = document.getElementById("loginForm")
const signUpForm = document.getElementById("signUpForm")

const contactErrorMessage = document.getElementById("contactErrorMessage")
const loginErrorMessage = document.getElementById("loginErrorMessage")
const signUpErrorMessage = document.getElementById("signUpErrorMessage")

const validateName = (input) => {
    if (input.value === "" || input.value == null) {
        nameValidationMessage.innerHTML = ""
        nameErrorMessage.innerHTML = "Your name must be complete"
    } else if (!input.value.match(/^[A-Za-z\s]+$/)) {
        nameValidationMessage.innerHTML = ""
        nameErrorMessage.innerHTML = "The name must be in correct format"
    } else {
        nameErrorMessage.innerHTML = ""
        nameValidationMessage.innerHTML = "<i class='fas fa-check-circle'></i>"
    }
}

const displayMessage = (element, message, color) => {
    element.style.display = "block"
    element.innerHTML = message
    element.style.color = color
}

const validateEmail = (input, index) => {
    if (input.value === "" || input.value == null) {
        emailValidationMessage[index].innerHTML = ""
        emailErrorMessage[index].innerHTML = "Your mail have to be complete"
    } else if (!input.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailValidationMessage[index].innerHTML = ""
        emailErrorMessage[index].innerHTML = "Your mail must be in correct format"
    } else {
        emailErrorMessage[index].innerHTML = ""
        emailValidationMessage[index].innerHTML = "<i class='fas fa-check-circle'></i>"
    }
}

const validateMessage = (input) => {
    if (input.value === "" || input.value == null) {
        messageValidationMessage.innerHTML = ""
        messageErrorMessage.innerHTML = "A message is necessary to understand your need."
    } else {
        messageErrorMessage.innerHTML = ""
        messageValidationMessage.innerHTML = "<i class='fas fa-check-circle'></i>"
    }
} 

const validatePassword = (input, index) => {
    if (input.value === "" || input.value == null) {
        passwordValidationMessage[index].innerHTML = ""
        passwordErrorMessage[index].innerHTML = "Your password must not be empty to be completed"
    } else if (!input.value.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/)) {
        passwordValidationMessage[index].innerHTML = ""
        passwordErrorMessage[index].innerHTML = "Your password must be in a correct"
    } else {
        passwordErrorMessage[index].innerHTML = ""
        passwordValidationMessage[index].innerHTML = "<i class='fas fa-check-circle'></i>"
        passwordValidationMessage[index].classList.add("validation--pw")
    }
}

const validateSamePassword = (input) => {
    if (input.value === "" || input.value == null) {
        samePasswordValidationMessage.innerHTML = ""
        samePasswordErrorMessage.innerHTML = "Your password must not be empty to be completed"
    } else if (input.value !== passwordInputs[1].value) {
        samePasswordValidationMessage.innerHTML = ""
        samePasswordErrorMessage.innerHTML = "Passwords do not match" 
    } else {
        samePasswordErrorMessage.innerHTML = "" 
        samePasswordValidationMessage.innerHTML = "<i class='fas fa-check-circle'></i>"
        samePasswordValidationMessage.classList.add("validation--pw")
    }
}

contactForm.addEventListener("submit", (e) => {
    validateName(nameInput)
    validateEmail(emailInputs[2], 2)
    validateMessage(messageInput)

    const errorMessages = [nameErrorMessage.innerHTML, emailErrorMessage[2].innerHTML, messageErrorMessage.innerHTML]

    if (errorMessages.some(message => message !== "")) {
        displayMessage(contactErrorMessage, "Please fill the form correctly before submitting.", "indianred")
        e.preventDefault()
    } else {
        displayMessage(contactErrorMessage, "Your form has been submitted successfully.", "mediumseagreen")
        contactForm.submit()
    }
})

loginForm.addEventListener("submit", (e) => {
    validateEmail(emailInputs[0], 0)
    validatePassword(passwordInputs[0], 0)
    
    const errorMessages = [emailErrorMessage[0].innerHTML, passwordErrorMessage[0].innerHTML]
    
    if (errorMessages.some(message => message !== "")) {
        displayMessage(loginErrorMessage, "Please fill the form correctly before submitting.", "indianred")
        e.preventDefault()
    } else {
        displayMessage(loginErrorMessage, "Your form has been submitted successfully.", "mediumseagreen")
        contactForm.submit()
    }
})

signUpForm.addEventListener("submit", (e) => {
    validateEmail(emailInputs[1], 1)
    validatePassword(passwordInputs[1], 1)
    validateSamePassword(samePasswordInput)

    const errorMessages = [emailErrorMessage[1].innerHTML, passwordErrorMessage[1].innerHTML, samePasswordErrorMessage.innerHTML]

    if (errorMessages.some(message => message !== "")) {
        displayMessage(signUpErrorMessage, "Please fill the form correctly before submitting.", "indianred")
        e.preventDefault()
    } else {
        displayMessage(signUpErrorMessage, "Your form has been submitted successfully.", "mediumseagreen")
        contactForm.submit()
    }
})