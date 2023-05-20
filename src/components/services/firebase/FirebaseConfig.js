import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC6dMzmJCYD5g2ebI4JOFVDigl0K-x2zTA",
  authDomain: "magicshop-7577e.firebaseapp.com",
  projectId: "magicshop-7577e",
  storageBucket: "magicshop-7577e.appspot.com",
  messagingSenderId: "792763472354",
  appId: "1:792763472354:web:b596125eb86cb661a401bb",
  measurementId: "G-PG6CKLW3W8",
};

const app = initializeApp(firebaseConfig);
export const initFirebase = () => app;
