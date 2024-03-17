// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLhbmGOCiFURWx8NSKbmPMDenUo6xVXWQ",
  authDomain: "expense-tracker-407bc.firebaseapp.com",
  projectId: "expense-tracker-407bc",
  storageBucket: "expense-tracker-407bc.appspot.com",
  messagingSenderId: "829235259990",
  appId: "1:829235259990:web:49cf0c0aa316dfd1c929f7",
  measurementId: "G-05CCXKFHJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

//yarn add react-router-dom firebase
//firebase login
//firebase init
//firebase deploy