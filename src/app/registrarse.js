import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import { auth } from "./firebase.js"

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

    
  } catch (error) {
    console.error(error)
  }
})