import { getFirestore,doc,setDoc,getDoc } from "firebase/firestore";

// create db
export const db = getFirestore();