const showIcons = document.querySelectorAll(".showIcon")
const hideIcons = document.querySelectorAll(".hideIcon")
const passwordInputsFields = document.querySelectorAll("input[type='password']")

showIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        passwordInputsFields[index].type = "text"
        icon.style.display = "none"
        hideIcons[index].style.display = "block"
    })
})
  
hideIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        passwordInputsFields[index].type = "password"
        icon.style.display = "none"
        showIcons[index].style.display = "block"
    })
})