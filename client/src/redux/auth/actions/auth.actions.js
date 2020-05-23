import C from "./../constants";

export const signupRequest = payload => ({
  type: C.SIGNUP_REQUEST,
  payload
});
export const signupSuccess = payload => ({
  type: C.SIGNUP_SUCCESS,
  payload
});
export const signupFailure = (payload) => ({
  type: C.SIGNUP_FAILURE,
  payload
});