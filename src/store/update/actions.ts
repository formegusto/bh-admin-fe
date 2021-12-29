import { createAction } from "redux-actions";
import { ADD_UPDATE, REMOVE_UPDATE, UpdateForm } from "./types";

export const addUpdate = createAction<UpdateForm>(ADD_UPDATE);
export const removeUpdate = createAction<number>(REMOVE_UPDATE);
