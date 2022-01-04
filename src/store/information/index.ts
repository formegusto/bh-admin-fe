import { handleActions } from "redux-actions";
import {
  Building,
  GET_INFOS_SUCCESS,
  Report,
  ResponseGetInfo,
  Sensor,
  Unit,
} from "./types";

type InforamtionStore = {
  buildings?: Building[] | null;
  units?: Unit[] | null;
  sensors?: Sensor[] | null;
  reports?: Report[] | null;
};

const informationStore: InforamtionStore = {
  buildings: null,
  units: null,
  sensors: null,
  reports: null,
};

type Payload = ResponseGetInfo;
const informationReducer = handleActions<InforamtionStore, Payload>(
  {
    [GET_INFOS_SUCCESS]: (state, action) => ({
      ...state,
      ...(action.payload.target === "building"
        ? {
            buildings: action.payload.data as Building[],
          }
        : action.payload.target === "unit"
        ? {
            units: action.payload.data as Unit[],
          }
        : action.payload.target === "sensor"
        ? {
            sensors: action.payload.data as Sensor[],
          }
        : action.payload.target === "report"
        ? {
            reports: action.payload.data as Report[],
          }
        : {}),
    }),
  },
  informationStore
);
export default informationReducer;
