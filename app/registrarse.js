import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showToast } from "./toast.js"

const formRegistrarse = document.getElementById("form-registrarse")

formRegistrarse.addEventListener("submit", async (event) => {
  event.preventDefault()
  const email = document.getElementById("registrarse-email").value
  const password = document.getElementById("registrarse-password").value

  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)

    const modal = document.getElementById("registrarse")
    bootstrap.Modal.getInstance(modal).hide()

    showToast('Bienvenido ' + userCredentials.user.email)

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showToast('El email ya existe', 'error')
    }
    else if (error.code === 'auth/invalid-email') {
      showToast('El email es invalido', 'error')
    }
    else if (error.code === 'auth/weak-password') {
      showToast('La contraseña es muy debil', 'error')
    }
    else if (error.code) {
      showToast('Ocurrio un error', 'error')
    }
  }
})