import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXCbDyHIYqzeklVwRaYFmxbH17twRGewE",
  authDomain: "proyectofinalhugo-ce0d0.firebaseapp.com",
  projectId: "proyectofinalhugo-ce0d0",
  storageBucket: "proyectofinalhugo-ce0d0.appspot.com",
  messagingSenderId: "595112064405",
  appId: "1:595112064405:web:283af6aa9da83d24daf29c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
