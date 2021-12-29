import { GetUsersQuery } from "src/store/user/types";
import client from "../client";
import qs from "qs";

const BASEPATH = "/admin/user";
export const getUsers = (query?: GetUsersQuery) =>
  client.get(`${BASEPATH}?${qs.stringify(query)}`);
