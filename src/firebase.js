// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCQzmaA4buGOPrWJkvRKShcEKlqvI6ajA",
  authDomain: "realtor-clone-835f0.firebaseapp.com",
  projectId: "realtor-clone-835f0",
  storageBucket: "realtor-clone-835f0.appspot.com",
  messagingSenderId: "779203562873",
  appId: "1:779203562873:web:a0e76e5b8cd1edea40f3a8",
  measurementId: "G-1SB9M37QCR"
};


// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
