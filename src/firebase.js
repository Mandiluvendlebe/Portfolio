// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU0Zf7Eo-04tgdImhTkZCAbJaltTAbi1s",
  authDomain: "my-portfolio-3be70.firebaseapp.com",
  projectId: "my-portfolio-3be70",
  storageBucket: "my-portfolio-3be70.appspot.com",
  messagingSenderId: "559448934542",
  appId: "1:559448934542:web:6c7be912f6992698e2a1df",
  measurementId: "G-3HEB2S17CL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };