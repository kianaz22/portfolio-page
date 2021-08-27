let email = document.querySelector('.email')
let button = document.getElementById('email-button')

const showEmail = () => {
    email.classList.toggle('visible')
}
button.addEventListener('click',showEmail)
