import createActionType from "../../utils/createActionType";

// data types
export interface SignInInput {
  username: string;
  password: string;
}

// redux action types
export const [SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE] =
  createActionType("auth/signin");
