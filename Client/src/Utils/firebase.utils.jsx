import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: proccess.env.GOOGLE_API_KEY,
  authDomain: "tkt-travel-agency.firebaseapp.com",
  projectId: "tkt-travel-agency",
  storageBucket: "tkt-travel-agency.firebasestorage.app",
  messagingSenderId: "192388944246",
  appId: "1:192388944246:web:22a2c3badfa1870599ea57",
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
setPersistence(auth, browserSessionPersistence).catch((err) => {
  console.error("Auth persistence error:", err);
});
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export { auth, provider };
