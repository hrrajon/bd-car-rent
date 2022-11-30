// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTAAbiI7JHt2N1V4aggX9xv0VuY3YGwus",
    authDomain: "bd-car-rent-service.firebaseapp.com",
    projectId: "bd-car-rent-service",
    storageBucket: "bd-car-rent-service.appspot.com",
    messagingSenderId: "22486785029",
    appId: "1:22486785029:web:dbf0060a60e61c5044906c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;