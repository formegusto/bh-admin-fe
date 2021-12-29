import { combineReducers } from "redux";
import user from "./user";
import auth from "./auth";

export const rootReducer = combineReducers({
  user,
  auth,
});
export type RootReducer = ReturnType<typeof rootReducer>;
