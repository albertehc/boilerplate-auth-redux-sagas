  
import { takeLatest, call, put } from "redux-saga/effects";
import C from "./../constants";
import * as authApi from "./../../../api/auth.api";
import A from "./../actions";

function* signupEffect({ payload }) {
  try {
    const response = yield call(authApi.signup,payload);
    yield put(A.signupSuccess(response));
  } catch (e) {
    console.error(e);
    yield put(A.signupFailure(e.response.data.msg));
  }
}

function* authSagas() {
  yield takeLatest(C.SIGNUP_REQUEST, signupEffect);
}
export default authSagas;