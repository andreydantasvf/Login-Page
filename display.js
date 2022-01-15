let buttonGoLogin = document.getElementById('go-login')
let buttonGoRegister = document.getElementById('go-register')
let login = document.querySelector('.login')
let register = document.querySelector('.cadastro')

buttonGoLogin.addEventListener('click', ()=> {
    goLogin()
})

buttonGoRegister.addEventListener('click', ()=> {
    goRegister()
})

function goLogin() {
    register.classList.remove('active')
    login.classList.add('active')
}

function goRegister() {
    login.classList.remove('active')
    register.classList.add('active')
}