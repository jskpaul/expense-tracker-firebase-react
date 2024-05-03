// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf9S-q9b1yVuls3qI0XIyvZ8El8GNX9VA",
  authDomain: "expense-tracker-ea2ac.firebaseapp.com",
  projectId: "expense-tracker-ea2ac",
  storageBucket: "expense-tracker-ea2ac.appspot.com",
  messagingSenderId: "573316559025",
  appId: "1:573316559025:web:d9fe98a2bcde3845aab290"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

// firebase login
// firebase init
// firebase deploy