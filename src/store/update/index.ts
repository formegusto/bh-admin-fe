import { handleActions } from "redux-actions";
import { ADD_UPDATE, REMOVE_UPDATE, UpdateForm } from "./types";

type UpdateStore = {
  updates: UpdateForm[];
};

const updateStore: UpdateStore = {
  updates: [],
};

type Payload = UpdateForm | number;
const updateReducer = handleActions<UpdateStore, Payload>(
  {
    [ADD_UPDATE]: (state, action) => ({
      ...state,
      updates: state.updates.concat(action.payload as UpdateForm),
    }),
    [REMOVE_UPDATE]: (state, action) => ({
      ...state,
      updates: state.updates.slice(
        action.payload as number,
        (action.payload as number) + 1
      ),
    }),
  },
  updateStore
);
export default updateReducer;
