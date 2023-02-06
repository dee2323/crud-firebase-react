// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKF7t51gtNPjBEUZdFgIoYsRKLuszzSCY",
    authDomain: "social-media-65bda.firebaseapp.com",
    projectId: "social-media-65bda",
    storageBucket: "social-media-65bda.appspot.com",
    messagingSenderId: "478171991969",
    appId: "1:478171991969:web:53a16b4f9a9ccdfc8785e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)