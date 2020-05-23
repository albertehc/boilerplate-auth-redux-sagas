import * as C from "./../constants/auth.constants";

export const signupRequest = (payload) => ({
  type: C.SIGNUP_REQUEST,
  payload,
});
export const signupSuccess = (payload) => ({
  type: C.SIGNUP_SUCCESS,
  payload,
});
export const signupFailure = (payload) => ({
  type: C.SIGNUP_FAILURE,
  payload,
});

export const logoutRequest = () => ({
  type: C.LOGOUT_REQUEST
});
export const logoutSuccess = () => ({
  type: C.LOGOUT_SUCCESS,
});
export const logoutFailure = (payload) => ({
  type: C.LOGOUT_FAILURE,
  payload,
});
