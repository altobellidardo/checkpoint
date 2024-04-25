import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"
import { auth } from './app/firebase.js'

import './app/registrarse.js'
import './app/cerrarSesion.js'

import { checkUser } from "./app/checkUser.js"

onAuthStateChanged(auth, async (user) => {
  checkUser(user)
})
