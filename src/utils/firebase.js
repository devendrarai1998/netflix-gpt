// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5J-UptvbgJisLf3ZUpqFKA5F8vjzUgTQ",
  authDomain: "netflix-gpt-8e862.firebaseapp.com",
  projectId: "netflix-gpt-8e862",
  storageBucket: "netflix-gpt-8e862.firebasestorage.app",
  messagingSenderId: "1093488376527",
  appId: "1:1093488376527:web:c668b89182a910854555ba",
  measurementId: "G-01MJZ6NLPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();