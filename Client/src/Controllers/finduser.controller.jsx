// import { useContext } from "react";
// import { SessionContext } from "../components/context/session.context";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../Utils/firestore.utils";


const getUserByUID = async (uid) => {
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return userSnap.data();
  } else {
    console.log("No such user!");
    return null;
  }
};

export default getUserByUID;