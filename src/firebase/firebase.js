// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5Xiq1nYjSmCs2VjvjutEfzPrIc06JD6A",
  authDomain: "netflix-react-4891f.firebaseapp.com",
  projectId: "netflix-react-4891f",
  storageBucket: "netflix-react-4891f.firebasestorage.app",
  messagingSenderId: "562352083331",
  appId: "1:562352083331:web:cc6ab00fb15a1fed62e6b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()