import { signInWithPopup } from "firebase/auth";
import { provider, auth } from "../Utils/firebase.utils";

const popUpSignIn = () => signInWithPopup(auth,provider);

export default popUpSignIn;