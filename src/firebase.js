
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBBNPwN-ib8KcIKiUIP3jSkxkbY6P7r5HU",
  authDomain: "chatapp-83317.firebaseapp.com",
  projectId: "chatapp-83317",
  storageBucket: "chatapp-83317.appspot.com",
  messagingSenderId: "81115935487",
  appId: "1:81115935487:web:09240912e26189463b52ca",
  measurementId: "G-6CKT1DL6VJ"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const database = getFirestore();
