import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6XOLD5Dd04e4KM3g67gIgRLZWgyk4VNQ",
  authDomain: "tkt-travel-agency.firebaseapp.com",
  projectId: "tkt-travel-agency",
  storageBucket: "tkt-travel-agency.firebasestorage.app",
  messagingSenderId: "192388944246",
  appId: "1:192388944246:web:22a2c3badfa1870599ea57"
};


const firebaseApp = initializeApp(firebaseConfig);