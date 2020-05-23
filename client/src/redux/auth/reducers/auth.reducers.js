import * as C from "./../constants/auth.constants";
import swal from "./../../../helpers/swal";
import toCapitalLetter from "./../../../helpers/toCapitalLetter";

export const initialState = {
  logged: false,
  id: null,
  username: null,
  email: null,
  theme: "dark",
  language: "en-EN",
  msg: null,
  loading: true,
};

export default (state = initialState, { type, payload }) => {
  let authAction;
  if (!!type) authAction = type.split("_")[0].split(" ")[1];
  switch (type) {
    case C.LOGOUT_REQUEST:
    case C.SIGNUP_REQUEST:
    case C.LOGIN_REQUEST:
    case C.EDIT_REQUEST:
    case C.DELETE_REQUEST:
    case C.ME_REQUEST:
      return {
        ...state,
        msg: null,
        loading: true,
      };
    case C.SIGNUP_SUCCESS:
    case C.LOGIN_SUCCESS:
    case C.EDIT_SUCCESS:
    case C.ME_SUCCESS:
      if (type !== C.ME_SUCCESS) swal.success(toCapitalLetter(authAction));
      return {
        ...state,
        logged: true,
        id: payload.id,
        username: payload.username,
        email: payload.email,
        theme: payload.theme,
        language: payload.language,
        msg: null,
        loading: false,
      };
    case C.LOGOUT_SUCCESS:
    case C.DELETE_SUCCESS:
      swal.success(toCapitalLetter(authAction));
      return {
        ...state,
        logged: false,
        id: null,
        username: null,
        email: null,
        msg: null,
        loading: false,
      };
    case C.DELETE_FAILURE:
    case C.EDIT_FAILURE:
      swal.error(payload);
      return {
        ...state,
        msg: payload,
        loading: false,
      };
    case C.LOGOUT_FAILURE:
    case C.SIGNUP_FAILURE:
    case C.ME_FAILURE:
    case C.LOGIN_FAILURE:
      if (type !== C.ME_FAILURE) swal.error(payload);
      return {
        ...state,
        logged: false,
        id: null,
        username: null,
        email: null,
        msg: payload,
        loading: false,
      };
    default:
      return state;
  }
};
