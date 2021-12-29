import { all } from "redux-saga/effects";
import sessionCertSaga from "./sessionCert/saga";

export default function* RootSaga() {
  yield all([sessionCertSaga()]);
}
