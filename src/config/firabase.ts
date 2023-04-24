import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBZLQRvY4IdIc7amkSC8Rb6kBF1oe-z5Cs",
  authDomain: "dluxo-d057b.firebaseapp.com",
  projectId: "dluxo-d057b",
  storageBucket: "dluxo-d057b.appspot.com",
  messagingSenderId: "643613247284",
  appId: "1:643613247284:web:6cf923d5786cb3b06d4761",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
