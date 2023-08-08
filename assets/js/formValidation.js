const submitInputs = document.querySelectorAll("input[type='submit']")

const nameInputs = document.getElementById("nameInput")
const nameValidationMessage = document.querySelectorAll(".nameValidation")
const nameErrorMessage = document.querySelectorAll(".nameError")

const emailInputs = document.querySelectorAll("input[type='email']")
const emailValidationMessage = document.querySelectorAll(".emailValidation")
const emailErrorMessage = document.querySelectorAll(".emailError")

const messageInputs = document.querySelectorAll(".messageInput")
const messageValidationMessage = document.querySelectorAll(".messageValidation")
const messageErrorMessage = document.querySelectorAll(".messageError")

const passwordInputs = document.querySelectorAll("input[type='password']")
const passwordErrorMessage = document.querySelectorAll(".passwordError")
const passwordValidationMessage = document.querySelectorAll(".passwordValidation")

const samePasswordInputs = document.querySelectorAll("input[name='samepassword']")
const samePasswordErrorMessage = document.querySelectorAll(".samePasswordError")
const samePasswordValidationMessage = document.querySelectorAll(".samePasswordValidation")

const contactForm = document.getElementById("contactForm")
const loginForm = document.getElementById("loginForm")
const signUpForm = document.getElementById("signUpForm")

const contactErrorMessages = document.getElementById("contactErrorMessages")
const loginErrorMessages = document.getElementById("loginErrorMessages")
const signUpErrorMessages = document.getElementById("signUpErrorMessages")

let nameError = 0
let emailError = 0
let messageError = 0
let passwordError = 0
let samePasswordError = 0

let totalError = [
]

console.log("total ici", totalError)

const validateName = (input) => {
    if (input.value === "" || input.value == null) {
        nameValidationMessage[0].innerHTML = ""
        nameErrorMessage[0].innerHTML = "Your name must be complete"
        nameError++
    } else if (!input.value.match(/^[A-Za-z\s]+$/)) {
        nameValidationMessage[0].innerHTML = ""
        nameErrorMessage[0].innerHTML = "The name must be in correct format"
        nameError++
    } else {
        nameErrorMessage[0].innerHTML = ""
        nameValidationMessage[0].innerHTML = "<i class='fas fa-check-circle'></i>"
        nameError = 0
    }
    return totalError.push(nameError)
}

const validateEmail = (input, index) => {
    if (input.value === "" || input.value == null) {
        emailValidationMessage[index].innerHTML = ""
        emailErrorMessage[index].innerHTML = "Your mail have to be complete"
        emailError++
    } else if (!input.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailValidationMessage[index].innerHTML = ""
        emailErrorMessage[index].innerHTML = "Your mail must be in correct format"
        emailError++
    } else {
        emailErrorMessage[index].innerHTML = ""
        emailValidationMessage[index].innerHTML = "<i class='fas fa-check-circle'></i>"
        emailError = 0
    }
    return totalError.push(emailError)
}

const validateMessage = (input) => {
    if (input.value === "" || input.value == null) {
        messageValidationMessage[0].innerHTML = ""
        messageErrorMessage[0].innerHTML = "A message is necessary to understand your need."
        messageError++
    } else {
        messageErrorMessage[0].innerHTML = ""
        messageValidationMessage[0].innerHTML = "<i class='fas fa-check-circle'></i>"
        messageError = 0
    }
    return totalError.push(messageError)
} 

const validatePassword = (input, index) => {
    if (input.value === "" || input.value == null) {
        passwordValidationMessage[index].innerHTML = ""
        passwordErrorMessage[index].innerHTM = "Your password must not be empty to be completed"
        passwordError++
    } else if (!input.value.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/)) {
        passwordValidationMessage[index].innerHTML = ""
        passwordErrorMessage[index].innerHTML = "Your password must be in a correct"
        passwordError++
    } else {
        passwordErrorMessage[index].innerHTML = ""
        passwordValidationMessage[index].innerHTML = "<i class='fas fa-check-circle'></i>"
        passwordValidationMessage[index].classList.add("validation--pw")
        passwordError = 0
    }
}

const validateSamePassword = (input) => {
    if (input.value === "" || input.value == null) {
        samePasswordValidationMessage[0].innerHTML = ""
        samePasswordErrorMessage[0].innerHTML = "Your password must not be empty to be completed"
        samePasswordError++
    } else if (input.value !== passwordInputs[1].value) {
        samePasswordValidationMessage[0].innerHTML = ""
        samePasswordErrorMessage[0].innerHTML = "Passwords do not match" 
        samePasswordError++
    } else {
        samePasswordErrorMessage[0].innerHTML = "" 
        samePasswordValidationMessage[0].innerHTML = "<i class='fas fa-check-circle'></i>"
        samePasswordValidationMessage[0].classList.add("validation--pw")
        samePasswordError = 0
    }
}

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    validateName()
    validateEmail()
    validateMessage()

    // Check if all fields are valid
    const isFormValid = !Array.from(contactErrorMessages).some((error) => error.innerHTML !== "")

    if (isFormValid) {
        contactErrorMessages.style.display = "block"
        contactErrorMessages.innerHTML = "Your form has been submitted successfully."
        contactErrorMessages.style.color = "mediumseagreen"
        setTimeout(function () {
            contactErrorMessages.style.display = "none"
        }, 10000)
        contactForm.submit(e)
    } else {
        contactErrorMessages.style.display = "block"
        contactErrorMessages.innerHTML = "Please fill the form correctly before submitting."
        contactErrorMessages.style.color = "indianred"
        setTimeout(function () {
            contactErrorMessages.style.display = "none"
        }, 10000)
    }
})

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    validateEmail()
    validatePassword()

    // Check if all fields are valid
    const isFormValid = !Array.from(loginErrorMessages).some((error) => error.innerHTML !== "")

    if (isFormValid) {
        loginErrorMessages.style.display = "block"
        loginErrorMessages.innerHTML = "Your login form has been submitted successfully."
        loginErrorMessages.style.color = "mediumseagreen"
        setTimeout(function () {
            loginErrorMessages.style.display = "none"
        }, 10000)
        loginForm.submit(e)
    } else {
        loginErrorMessages.style.display = "block"
        loginErrorMessages.innerHTML = "Please fill the form correctly before submitting."
        loginErrorMessages.style.color = "indianred"
        setTimeout(function () {
            loginErrorMessages.style.display = "none"
        }, 10000)
    }
})

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault()

    validateEmail()
    validatePassword()
    validateSamePassword()

    // Check if all fields are valid
    const isFormValid = !Array.from(signUpErrorMessages).some((error) => error.innerHTML !== "")

    if (isFormValid) {
        signUpErrorMessages[0].style.display = "block"
        signUpErrorMessages[0].innerHTML = "Your sign-up form has been submitted successfully."
        signUpErrorMessages[0].style.color = "mediumseagreen"
        setTimeout(function () {
            signUpErrorMessages[0].style.display = "none"
        }, 10000)
        signUpForm.submit(e)
    } else {
        signUpErrorMessages[0].style.display = "block"
        signUpErrorMessages[0].innerHTML = "Please fill the form correctly before submitting."
        signUpErrorMessages[0].style.color = "indianred"
        setTimeout(function () {
            signUpErrorMessages[0].style.display = "none"
        }, 10000)
    }
})