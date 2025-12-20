import { createContext, useReducer, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Utils/firebase.utils";

export const UserContext = createContext({
  userData: null,
  signedIn: false,
  setUserData: () => {},
  setSigninedIn: () => {},
});

const USER_ACTIONS = {
  SET_USER: "SET_USER",
  SET_SIGNED_IN: "SET_SIGNED_IN",
};

const INITIAL_STATE = {
  userData: null,
  signedIn: false,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTIONS.SET_USER:
      return { ...state, userData: action.payload };

    case USER_ACTIONS.SET_SIGNED_IN:
      return { ...state, signedIn: action.payload };

    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { userData, signedIn } = state;

  const setUserData = (data) =>
    dispatch({ type: USER_ACTIONS.SET_USER, payload: data });

  const setSigninedIn = (value) =>
    dispatch({ type: USER_ACTIONS.SET_SIGNED_IN, payload: value });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserData(user);
      setSigninedIn(!!user);
    });
    return unsubscribe;
  }, []);

  const value = {
    userData,
    signedIn,
    setUserData,
    setSigninedIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
