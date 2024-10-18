// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-262a6.firebaseapp.com",
  projectId: "mern-estate-262a6",
  storageBucket: "mern-estate-262a6.appspot.com",
  messagingSenderId: "636677722040",
  appId: "1:636677722040:web:986c531567d4fc5527094d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
