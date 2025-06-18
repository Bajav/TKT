import { db } from "../Utils/firestore.utils";
import { setDoc, getDoc, doc } from "firebase/firestore";

const createUserFromAuth = async (user) => {
  // check if document ecxists
  const userRef = doc(db, "user", user.uid);
  // read user
  const userSnapShot = await getDoc(userRef);
  if (userSnapShot.exists()) {
    const userData = userSnapShot.data();
    console.log("✅ User found:", userData);
  } else {
    const { displayName, email, photoURL } = user;
    const timeCreated = new Date();
    await setDoc(userRef, { displayName, email, photoURL, timeCreated });
  }
};

export default createUserFromAuth;
