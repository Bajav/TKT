import { signInWithPopup } from "firebase/auth";
import { provider, auth } from "../Utils/firebase.utils";
import { UserContext } from "../components/context/user.context";
import { useContext } from "react";
import createUserFromAuth from '../Controllers/createUser.controller';

const popUpSignIn = () => signInWithPopup(auth, provider);

const signinwithpopup = async () => {
      const { setUserData} = useContext(UserContext);
  try {
    const signinedInUser = await popUpSignIn();
    setUserData(signinedInUser.user);
    console.log("signinedInUser ::", signinedInUser.user);
    await createUserFromAuth(signinedInUser.user);
    setSigninedIn(true);
  } catch (err) {
    console.log("❌ Error signing in:", err);
  }
};
export default signinwithpopup;
