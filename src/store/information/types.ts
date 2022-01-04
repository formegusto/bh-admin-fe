import createActionType from "src/utils/createActionType";
import { Response } from "../types";

// DataType
export type ResponseGetInfo = Response<{
  target: "building" | "unit" | "sensor" | "report";
  data: Building[] | Unit[] | Sensor[] | Report[];
}>;

export type InfosPath = {
  target: "building" | "unit" | "sensor" | "report";
  rootId?: number;
};

export type Building = {
  id: number;
  name: string;
  image?: string;
};

export type Unit = {
  id: number;
  name: string;
};

export interface Sensor extends Unit {}

export type Report = {
  [key: string]: any;
  createdAt: string;

  isStay?: boolean;
  residentCount?: number;
  temperature?: number;
  humidity?: number;
  lux?: number;
  skinTemperature?: number;
  residentDistribution?: number;
  satisfaction?: number;
};

export const [GET_INFOS, GET_INFOS_SUCCESS, GET_INFOS_FAILURE] =
  createActionType("info/get_infos");
