import { combineReducers } from "redux";
import { userReducer } from "./users/userreducer.store";
export const rootReducer = combineReducers({
    user:userReducer
});