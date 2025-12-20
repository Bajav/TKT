import { useContext } from "react";
import { UserContext } from "../components/context/user.context";
import { provider, auth } from "../Utils/firebase.utils";
import { signInWithPopup } from "firebase/auth";
import createUserFromAuth from "../Controllers/createUser.controller";

const SignInButton = () => {
  const { setUserData, setSigninedIn } = useContext(UserContext);
  const popUpSignIn = () => signInWithPopup(auth, provider);
  const signinwithpopup = async () => {
    try {
      const result = await popUpSignIn();
      const user = result.user;
      setUserData({
        displayName: user.displayName,
        email: user.email,
        imageUrl: user.photoURL,
      });
      //   await createUserFromAuth(user);
      setSigninedIn(true);
      console.log("Signed in user:", user);
    } catch (err) {
      console.error("❌ Error signing in:", err);
    }
  };
  return <button onClick={signinwithpopup}>sign in</button>;
};

export default SignInButton;
