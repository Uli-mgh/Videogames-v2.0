// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyABzvdJPIlCckVfuYlNUvQEz3HOsQZgxf4",
  authDomain: "videogames-v2.firebaseapp.com",
  projectId: "videogames-v2",
  storageBucket: "videogames-v2.appspot.com",
  messagingSenderId: "846180025188",
  appId: "1:846180025188:web:71c81c160bba46ae4d7071"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export {auth, db}