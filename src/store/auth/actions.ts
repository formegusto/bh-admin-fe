import { createAction } from "redux-actions";
import { SIGNIN, SignInInput } from "./types";

export const signIn = createAction<SignInInput>(SIGNIN);
