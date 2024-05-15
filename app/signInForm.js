import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showToast } from "./toast.js"

const iniciarSesion = document.getElementById("form-iniciarSesion")

iniciarSesion.addEventListener("submit", async (event) => {
  event.preventDefault()
  const email = iniciarSesion.email.value
  const password = iniciarSesion["iniciarSesion-password"].value

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    const modal = document.getElementById("iniciarSesion")
    bootstrap.Modal.getInstance(modal).hide()
    showToast('Bienvenido ' + userCredentials.user.email)
  } catch (error) {
    showToast('Error al iniciar sesión' + error, 'error')
    console.log(error)
    if (error.code === 'auth/user-not-found') {
      showToast('El usuario no existe', 'error')
    }
    else if (error.code === 'auth/wrong-password') {
      showToast('La contraseña es incorrecta', 'error')
    }
    else if (error.code === 'auth/too-many-requests') {
      showToast('Demasiados intentos fallidos', 'error')
    }
  }
})