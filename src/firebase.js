// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsIfNDn6DN6EIM2o1XTRmom53RqztJLmw",
    authDomain: "atg-chat-1f74b.firebaseapp.com",
    projectId: "atg-chat-1f74b",
    storageBucket: "atg-chat-1f74b.appspot.com",
    messagingSenderId: "217534728266",
    appId: "1:217534728266:web:21c0c5fa5ef960984dfeb3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
