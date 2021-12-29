import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import sessionCertSaga from "./sessionCert/saga";
import userSaga from "./user/saga";

export default function* RootSaga() {
  yield all([sessionCertSaga(), authSaga(), userSaga()]);
}
