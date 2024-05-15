// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsEmKk9lKMCQfNwDffO24Twx8ostBk1Yw",
  authDomain: "checkpoint-3b36e.firebaseapp.com",
  projectId: "checkpoint-3b36e",
  storageBucket: "checkpoint-3b36e.appspot.com",
  messagingSenderId: "1052226585500",
  appId: "1:1052226585500:web:3db873a43254496d08fe59"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);