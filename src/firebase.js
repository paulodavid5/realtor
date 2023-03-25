// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmonjislaYZo8LCYOsJNT19YafczLNaRY",
  authDomain: "realtor-clone-paulo.firebaseapp.com",
  projectId: "realtor-clone-paulo",
  storageBucket: "realtor-clone-paulo.appspot.com",
  messagingSenderId: "977669073748",
  appId: "1:977669073748:web:5237749acb341c2145b6c1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();