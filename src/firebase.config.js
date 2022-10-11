// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeis6lpr1dukkO2aRH4BGm93vowht09tM",
  authDomain: "platform-app-623f0.firebaseapp.com",
  projectId: "platform-app-623f0",
  storageBucket: "platform-app-623f0.appspot.com",
  messagingSenderId: "463881963510",
  appId: "1:463881963510:web:e92451462ca8cc83c4a9d7",
  measurementId: "G-42RG50KHE1"
};

// Initialize Firebase
initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);
const analytics = getFirestore();
const db = getFirestore();

export {app, db, analytics};


