// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyAn6PTJqvr6yng3QpBN9-y5rmrmyISOOmQ",
  authDomain: "my-quiz-ae1ed.firebaseapp.com",
  projectId: "my-quiz-ae1ed",
  storageBucket: "my-quiz-ae1ed.appspot.com",
  messagingSenderId: "19829245690",
  appId: "1:19829245690:web:1aa2f647ccd3230efdeb43",
  measurementId: "G-E11E4K2NBK"
};

export const Firebase = initializeApp(firebaseConfig);

export const db = getFirestore(Firebase);
