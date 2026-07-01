import { auth } from "./firebase.js";

import {
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ======================
// Login
// ======================

const loginBtn = document.getElementById("loginBtn");

if(loginBtn){

loginBtn.addEventListener("click", async()=>{

const email=document.getElementById("email").value.trim();

const password=document.getElementById("password").value;

const message=document.getElementById("message");

if(email==="" || password===""){

message.innerHTML="Please enter your email and password.";

return;

}

try{

await signInWithEmailAndPassword(auth,email,password);

window.location.href="dashboard.html";

}

catch(error){

message.innerHTML=error.message;

}

});

}

// ======================
// Logout
// ======================

const logoutBtn=document.getElementById("logoutBtn");

if(logoutBtn){

logoutBtn.addEventListener("click",async()=>{

await signOut(auth);

window.location.href="login.html";

});

}

// ======================
// Check Login
// ======================

onAuthStateChanged(auth,(user)=>{

const page=window.location.pathname.split("/").pop();

if(page==="dashboard.html" && !user){

window.location.href="login.html";

}

});