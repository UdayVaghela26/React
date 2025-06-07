// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3To1HMLK6jnjBFqxAU2vehKNqa3R1RN0",
  authDomain: "fir-8e4c9.firebaseapp.com",
  projectId: "fir-8e4c9",
  storageBucket: "fir-8e4c9.firebasestorage.app",
  messagingSenderId: "187926934747",
  appId: "1:187926934747:web:6641890c0f30a1542988fe",
  measurementId: "G-BN1VCMR0F7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
