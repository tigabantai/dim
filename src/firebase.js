// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGusrcVF_39Q9msKxHXF8fkqZ7bXcT7gQ",
  authDomain: "dimasganteng-71762.firebaseapp.com",
  projectId: "dimasganteng-71762",
  storageBucket: "dimasganteng-71762.appspot.com",
  messagingSenderId: "532271459204",
  appId: "1:532271459204:web:4b874e6f4d97cddb324bd1",
  measurementId: "G-QGWKG0PJ5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
