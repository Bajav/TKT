const USER_ACTIONS = {
  SET_USER: "SET_USER",
  SET_SIGNED_IN: "SET_SIGNED_IN",
};

const INITIAL_STATE = {
  userData: null,
  signedIn: false,
};

export const userReducer = (state=INITIAL_STATE , action) => {
  switch (action.type) {
    case USER_ACTIONS.SET_USER:
      return { ...state, userData: action.payload };

    case USER_ACTIONS.SET_SIGNED_IN:
      return { ...state, signedIn: action.payload };

    default:
      return state;
  }
};