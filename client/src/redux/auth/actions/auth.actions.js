import * as C from "./../constants/auth.constants";

export const meRequest = (payload) => ({
  type: C.ME_REQUEST,
  payload,
});
export const meSuccess = (payload) => ({
  type: C.ME_SUCCESS,
  payload,
});
export const meFailure = (payload) => ({
  type: C.ME_FAILURE,
  payload,
});

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

export const loginRequest = (payload) => ({
  type: C.LOGIN_REQUEST,
  payload,
});
export const loginSuccess = (payload) => ({
  type: C.LOGIN_SUCCESS,
  payload,
});
export const loginFailure = (payload) => ({
  type: C.LOGIN_FAILURE,
  payload,
});

export const editRequest = (payload) => ({
  type: C.EDIT_REQUEST,
  payload,
});
export const editSuccess = (payload) => ({
  type: C.EDIT_SUCCESS,
  payload,
});
export const editFailure = (payload) => ({
  type: C.EDIT_FAILURE,
  payload,
});

export const deleteRequest = (payload) => ({
  type: C.DELETE_REQUEST,
  payload,
});
export const deleteSuccess = (payload) => ({
  type: C.DELETE_SUCCESS,
  payload,
});
export const deleteFailure = (payload) => ({
  type: C.DELETE_FAILURE,
  payload,
});

export const logoutRequest = () => ({
  type: C.LOGOUT_REQUEST,
});
export const logoutSuccess = () => ({
  type: C.LOGOUT_SUCCESS,
});
export const logoutFailure = (payload) => ({
  type: C.LOGOUT_FAILURE,
  payload,
});
