// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCzTR32cndwGcdj4UVy5mfjgzOUp4Sla8",
    authDomain: "fixit-d94a5.firebaseapp.com",
    projectId: "fixit-d94a5",
    storageBucket: "fixit-d94a5.appspot.com",
    messagingSenderId: "973335036594",
    appId: "1:973335036594:web:c48806817dbf5af22bbfab",
    measurementId: "G-7BKJ3BN848"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export default app;
