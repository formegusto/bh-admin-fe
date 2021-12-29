import { combineReducers } from "redux";
import user from "./user";
import auth from "./auth";
import sessionCert from "./sessionCert";

export const rootReducer = combineReducers({
  user,
  auth,
  sessionCert,
});
export type RootReducer = ReturnType<typeof rootReducer>;
