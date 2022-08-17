import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCFwisnxDh3yeDUKWXlsts4tk0ikNIHxe8",
    authDomain: "sign-b6ba7.firebaseapp.com",
    projectId: "sign-b6ba7",
    storageBucket: "sign-b6ba7.appspot.com",
    messagingSenderId: "106805516208",
    appId: "1:106805516208:web:ff317224f7ae0dc26be875",
    measurementId: "G-ELKY7R86Q2"
};
const app = initializeApp(firebaseConfig)
export const autentication = getAuth(app)