// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-abfad.firebaseapp.com",
  projectId: "mern-estate-abfad",
  storageBucket: "mern-estate-abfad.appspot.com",
  messagingSenderId: "904230455249",
  appId: "1:904230455249:web:4c3edb298ca20af424c2f0",
  measurementId: "G-BSTXD8GEZG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);