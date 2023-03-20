let loginBtn = document.getElementById('login-btn')
let email = document.getElementById('e-mail')
let password = document.getElementById('password')
let passwordRegex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
let mailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

loginBtn.addEventListener("click", (e) =>{
    e.preventDefault()

    console.log(mailRegex.test(email.value))
    console.log(passwordRegex.test(password.value))

    if(!mailRegex.test(email.value) || !passwordRegex.test(password.value)) {
        alert('Email ou senha Invalido')
    }
})

/*
Programador, que estiver lendo isso, lembresse do que nossa professora disse, NÃO USE SÓ O REQUIRED MIZERA, faça a validação no JS também <3
-Motsu
*/