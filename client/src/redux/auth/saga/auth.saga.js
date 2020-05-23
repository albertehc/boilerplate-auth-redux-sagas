import { takeLatest, call, put } from "redux-saga/effects";
import * as C from "./../constants/auth.constants";
import * as authApi from "./../../../api/auth.api";
import * as A from "./../actions/auth.actions";

function* signupEffect({ payload }) {
  try {
    const response = yield call(authApi.signup, payload);
    yield put(A.signupSuccess(response));
  } catch (e) {
    console.error(e);
    yield put(A.signupFailure(e.response.data.msg));
  }
}

function* logoutEffect() {
  try {
    yield call(authApi.logout);
    yield put(A.logoutSuccess());
  } catch (e) {
    console.error(e);
    yield put(A.logoutFailure(e.response.data.msg));
  }
}

export default function* authSagas() {
  yield takeLatest(C.SIGNUP_REQUEST, signupEffect);
  yield takeLatest(C.LOGOUT_REQUEST, logoutEffect);
}
