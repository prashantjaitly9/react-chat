import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-21e1f.firebaseapp.com",
  projectId: "reactchat-21e1f",
  storageBucket: "reactchat-21e1f.firebasestorage.app",
  messagingSenderId: "667646399265",
  appId: "1:667646399265:web:347cb22e1190ca3f4a6460"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
