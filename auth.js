// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyIG6CiNCcG69FCqxnQPzYIpcBjFP_Ihw",
    authDomain: "hotel-reservation-system-48b62.firebaseapp.com",
    projectId: "hotel-reservation-system-48b62",
    storageBucket: "hotel-reservation-system-48b62.appspot.com",
    messagingSenderId: "732255301605",
    appId: "1:732255301605:web:7e15b9c140ee0145bdc90c",
    measurementId: "G-7EE3DC4VY1"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup function
document.getElementById('signup').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('User signed up successfully!');
            window.location.href = 'hotel.html';  // Redirect to main page
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Login function
document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('User logged in successfully!');
            window.location.href = 'hotel.html';  // Redirect to main page
        })
        .catch((error) => {
            alert(error.message);
        });
});
