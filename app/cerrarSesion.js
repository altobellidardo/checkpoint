import { signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"
import { auth } from "./firebase.js"

const cerrarSesion = document.getElementById("cerrarSesion")

cerrarSesion.addEventListener("click", async () => {
  await signOut(auth)
})