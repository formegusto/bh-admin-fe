import { handleActions } from "redux-actions";
import { SIGNIN_SUCCESS } from "./types";

type AuthStore = {
  auth: string | null;
};

const authStore: AuthStore = {
  auth: null,
};

const authReducer = handleActions<AuthStore, any>(
  {
    [SIGNIN_SUCCESS]: (state, action) => ({
      ...state,
    }),
  },
  authStore
);
export default authReducer;
