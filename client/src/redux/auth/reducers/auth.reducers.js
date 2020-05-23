import C from "./../constants";
import swal from "./../../../helpers/swal";

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
  switch (type) {
    case C.SIGNUP_REQUEST:
      return {
        ...state,
        msg: null,
        loading: true,
      };
    case C.SIGNUP_SUCCESS:
      swal.success('Signup')
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
    case C.SIGNUP_FAILURE:
      swal.error(payload);
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
