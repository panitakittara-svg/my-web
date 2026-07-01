import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-1qC26W8l-5wdc7QlVK1ylw2iiFpZYyQ",
  authDomain: "aua-internship-hub-11b96.firebaseapp.com",
  projectId: "aua-internship-hub-11b96",
  storageBucket: "aua-internship-hub-11b96.firebasestorage.app",
  messagingSenderId: "387842751034",
  appId: "1:387842751034:web:2d68a18454e9075128d303",
  measurementId: "G-ZYGHF0KK1S"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);