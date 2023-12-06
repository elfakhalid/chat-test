// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8f6exjwm4Lt3cVUTeQxJVbUvelL8tlIg",
    authDomain: "atg-chat2.firebaseapp.com",
    projectId: "atg-chat2",
    storageBucket: "atg-chat2.appspot.com",
    messagingSenderId: "345961395698",
    appId: "1:345961395698:web:e290dcc8a354bec303276b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();