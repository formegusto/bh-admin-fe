import { combineReducers } from "redux";
import user from "./user";

export const rootReducer = combineReducers({
  user,
});
export type RootReducer = ReturnType<typeof rootReducer>;
