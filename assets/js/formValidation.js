const submitInputs = document.querySelectorAll("input[type='submit']")

const nameInputs = document.querySelectorAll(".nameInput")
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

const contactForm = document.querySelector("#contactForm")
const loginForm = document.querySelector("#loginForm")
const signUpForm = document.querySelector("#signUpForm")

const contactErrorMessages = document.querySelectorAll("#contactErrorMessages")
const loginErrorMessages = document.querySelectorAll("#loginErrorMessages")
const signUpErrorMessages = document.querySelectorAll("#signUpErrorMessages")

const validateName = () => {
    nameInputs.forEach((input, index) => {
        if (input.value === "" || input.value == null) {
            nameErrorMessage[index].innerHTML = ""
            nameValidationMessage[index].innerHTML = ""
            nameErrorMessage[index].innerHTML = "Your name must be complete"
            nameErrorMessage[index].style.color = "red"

        } else if (!input.value.match(/^[A-Za-z\s]+$/)) {
            nameErrorMessage[index].innerHTML = ""
            nameValidationMessage[index].innerHTML = ""
            nameErrorMessage[index].innerHTML = "The name must be in correct format"
            nameErrorMessage[index].style.color = "red"
            
        } else {
            nameErrorMessage[index].innerHTML = ""
            nameValidationMessage[index].innerHTML = "<i class='fas fa-check-circle'></i>"
            nameValidationMessage[index].style.color = "green"
            nameValidationMessage[index].style.position = "absolute"
            nameValidationMessage[index].style.top = "50%"
            nameValidationMessage[index].style.right = "1rem"
            nameValidationMessage[index].style.transform = "translateY(-50%)"
            nameValidationMessage[index].style.padding = "0.5rem"
        }
    })
}

const validateEmail = () => {
    emailInputs.forEach((input, index) => {
        if (input.value === "" || input.value == null) {
            emailErrorMessage[index].innerHTML = ""
            emailValidationMessage[index].innerHTML = ""
            emailErrorMessage[index].innerHTML = "Your mail have to be complete"
            emailErrorMessage[index].style.color = "red"

        } else if (!input.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            emailErrorMessage[index].innerHTML = ""
            emailErrorMessage[index].innerHTML = "Your mail must be in correct format"
            emailErrorMessage[index].style.color = "red"
            emailValidationMessage[index].innerHTML = ""

        } else {
            emailErrorMessage[index].innerHTML = ""
            emailValidationMessage[index].innerHTML = "<i class='fas fa-check-circle'></i>"
            emailValidationMessage[index].style.color = "green"
            emailValidationMessage[index].style.position = "absolute"
            emailValidationMessage[index].style.top = "50%"
            emailValidationMessage[index].style.right = "1rem"
            emailValidationMessage[index].style.transform = "translateY(-50%)"
            emailValidationMessage[index].style.padding = "0.5rem"
        }
    })
}

const validateMessage = () => {
    messageInputs.forEach((input, index) => {
        if (input.value === "" || input.value == null) {
            messageErrorMessage[index].innerHTML = ""
            messageValidationMessage[index].innerHTML = ""
            messageErrorMessage[index].innerHTML = "A message is necessary to understand your need."
            messageErrorMessage[index].style.color = "red"
        } else {
            messageErrorMessage[index].innerHTML = ""
            messageValidationMessage[index].innerHTML = "<i class='fas fa-check-circle'></i>"
            messageValidationMessage[index].style.color = "green"
            messageValidationMessage[index].style.position = "absolute"
            messageValidationMessage[index].style.top = "50%"
            messageValidationMessage[index].style.right = "1rem"
            messageValidationMessage[index].style.transform = "translateY(-50%)"
            messageValidationMessage[index].style.padding = "0.5rem"
        }
    })
} 

const validatePassword = () => {
    passwordInputs.forEach((input, index) => {
        if (input.value === "" || input.value == null) {
            passwordErrorMessage[index].innerHTML = ""
            passwordValidationMessage[index].innerHTML = ""
            passwordErrorMessage[index].innerHTML = "Your password must not be empty to be completed"
            passwordErrorMessage[index].style.color = "red"
        } else if (!input.value.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/)) {
            passwordErrorMessage[index].innerHTML = ""
            passwordValidationMessage[index].innerHTML = ""
            passwordErrorMessage[index].innerHTML = "Your password must have at least : one uppercase letter, one digit (number), one special character from the set !@#$%^&*, one lowercase letter, and at least 8 characters in total"
            passwordErrorMessage[index].style.color = "red"
        } else {
            passwordErrorMessage[index].innerHTML = ""
            passwordValidationMessage[index].innerHTML = "<i class='fas fa-check-circle'></i>"
            passwordValidationMessage[index].style.color = "green"
            passwordValidationMessage[index].style.position = "absolute"
            passwordValidationMessage[index].style.top = "50%"
            passwordValidationMessage[index].style.right = "4rem"
            passwordValidationMessage[index].style.transform = "translateY(-50%)"
            passwordValidationMessage[index].style.padding = "0.5rem"
        }
    })
}

const validateSamePassword = () => {
    samePasswordInputs.forEach((input, index) => {
        if (input.value !== passwordInputs[index].value) {
            samePasswordValidationMessage[index].innerHTML = ""
            samePasswordErrorMessage[index].innerHTML = "Passwords do not match" 
            samePasswordErrorMessage[index].style.color = "red"
        } else {
            samePasswordErrorMessage[index].innerHTML = "" 
            samePasswordValidationMessage[index].innerHTML = "<i class='fas fa-check-circle'></i>"
            samePasswordValidationMessage[index].style.color = "green"
            samePasswordValidationMessage[index].style.position = "absolute"
            samePasswordValidationMessage[index].style.top = "50%"
            samePasswordValidationMessage[index].style.right = "4rem"
            samePasswordValidationMessage[index].style.transform = "translateY(-50%)"
            samePasswordValidationMessage[index].style.padding = "0.5rem"
        }
    })
}

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    validateName()
    validateEmail()
    validateMessage()

    // Check if all fields are valid
    const isFormValid = !Array.from(contactErrorMessages).some((error) => error.innerHTML !== "")

    if (isFormValid) {
        contactErrorMessages[0].style.display = "block"
        contactErrorMessages[0].innerHTML = "Your form has been submitted successfully."
        setTimeout(function () {
            contactErrorMessages[0].style.display = "none"
        }, 3000)
        contactForm.submit()
    } else {
        contactErrorMessages[0].style.display = "block"
        contactErrorMessages[0].innerHTML = "Please fill the form correctly before submitting."
        setTimeout(function () {
            contactErrorMessages[0].style.display = "none"
        }, 3000)
    }
})

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    validateEmail()
    validatePassword()

    // Check if all fields are valid
    const isFormValid = !Array.from(loginErrorMessages).some((error) => error.innerHTML !== "")

    if (isFormValid) {
        loginErrorMessages[0].style.display = "block"
        loginErrorMessages[0].innerHTML = "Your login form has been submitted successfully."
        setTimeout(function () {
            loginErrorMessages[0].style.display = "none"
        }, 3000)
        loginForm.submit()
    } else {
        loginErrorMessages[0].style.display = "block"
        loginErrorMessages[0].innerHTML = "Please fill the form correctly before submitting."
        setTimeout(function () {
            loginErrorMessages[0].style.display = "none"
        }, 3000)
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
        setTimeout(function () {
            signUpErrorMessages[0].style.display = "none"
        }, 3000)
        signUpForm.submit()
    } else {
        signUpErrorMessages[0].style.display = "block"
        signUpErrorMessages[0].innerHTML = "Please fill the form correctly before submitting."
        setTimeout(function () {
            signUpErrorMessages[0].style.display = "none"
        }, 3000)
    }
})