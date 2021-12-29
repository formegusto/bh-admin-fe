import { combineReducers } from "redux";
import user from "./user";
import auth from "./auth";
import sessionCert from "./sessionCert";
import update from "./update";

export const rootReducer = combineReducers({
  user,
  auth,
  sessionCert,
  update,
});
export type RootReducer = ReturnType<typeof rootReducer>;
