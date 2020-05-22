import {
  USER_RESPONSE,
  USER_RESPONSE_ERROR,
  LOADING
} from "../../constants";

export const setUserAction = data => ({
  type: USER_RESPONSE,
  payload: data,
});
export const setUserActionError = data => ({
  type: USER_RESPONSE_ERROR,
  payload: data,
});
export const setLoading = () => ({
  type: LOADING
});
