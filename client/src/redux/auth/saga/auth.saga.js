import { call, put, takeLatest } from "redux-saga/effects";
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

function* loginEffect({ payload }) {
  try {
    const response = yield call(authApi.login, payload);
    yield put(A.loginSuccess(response));
  } catch (e) {
    console.error(e);
    yield put(A.loginFailure(e.response.data.msg));
  }
}

function* meEffect() {
  try {
    const response = yield call(authApi.me);
    if (response?.msg !== "Unauthorized") yield put(A.meSuccess(response));
    else yield put(A.meFailure(response.msg));
  } catch (e) {
    console.error(e);
    yield put(A.meFailure(e.response.data.msg));
  }
}

function* editEffect({ payload }) {
  try {
    const response = yield call(authApi.edit, payload);
    yield put(A.editSuccess(response));
  } catch (e) {
    console.error(e);
    yield put(A.editFailure(e.response.data.msg));
  }
}

function* deleteEffect({ payload }) {
  try {
    const response = yield call(authApi.remove, { password: payload });
    yield put(A.deleteSuccess(response));
  } catch (e) {
    console.error(e);
    yield put(A.deleteFailure(e.response.data.msg));
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
  yield takeLatest(C.LOGIN_REQUEST, loginEffect);
  yield takeLatest(C.ME_REQUEST, meEffect);
  yield takeLatest(C.EDIT_REQUEST, editEffect);
  yield takeLatest(C.DELETE_REQUEST, deleteEffect);
  yield takeLatest(C.LOGOUT_REQUEST, logoutEffect);
}
