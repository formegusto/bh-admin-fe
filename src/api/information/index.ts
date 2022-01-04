import client from "../client";

const BASHPATH = "/admin/data";

export const getInfos = (infoPath: string) =>
  client.get(`${BASHPATH}${infoPath}`);
