import { User } from "../models/user.js"

let contentSign = document.getElementById("content_sign")

let signin = document.getElementById("signin")
let signup = document.getElementById("signup")

let emailSignin = document.getElementById("email_signin")
let passwordSignin = document.getElementById("password_signin")

function htmlSignOff(sign) {
    let html = ""
    switch (sign) {
        case "signin":
            html = `<button id="signin" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#modalSignin">Iniciar Sesión</button>`
            break;
        
        case "signup":
            html = `<button id="signup" class="btn btn-outline-secondary me-2" data-bs-toggle="modal" data-bs-target="#modalSignup">Crear Cuenta</button>`
            break;
        
        case "signoff":
            html = `<button type="button" id="signoff" class="btn btn-secondary me-2">Cerrar Sesión</button>`
            break;
    }
    
    return html
}

if (sessionStorage.getItem("user")) {
    signin.remove()
    signup.remove()
    contentSign.innerHTML = htmlSignOff("signoff") + contentSign.innerHTML
}

document.getElementById("btn_signin").addEventListener("click", e => {
    const user = User.login(emailSignin.value, passwordSignin.value)
    if (user) {
        sessionStorage.setItem("user", JSON.stringify(user))
        signup.remove()
        signin.remove()
    }
})

document.getElementById("signoff").addEventListener("click", e => {
    sessionStorage.removeItem("user")
    document.getElementById("signoff").remove()
    contentSign.innerHTML = htmlSignOff("signup") + htmlSignOff("signin") + contentSign.innerHTML
})