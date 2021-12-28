import createActionType from "../../utils/createActionType";

export const [GET_USER_LIST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE] =
  createActionType("user/get_user_list");
