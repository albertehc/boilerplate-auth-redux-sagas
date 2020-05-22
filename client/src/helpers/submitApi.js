import swal from "sweetalert";
import {
  setUserAction,
  setLoading,
  setUserActionError,
} from "../context/auth/authActions";

export const submitApi = ({ data, api, action, history, dispatch }) => {
  dispatch(setLoading());
  api(data)
    .then((res) => {
      dispatch(setUserAction(res));
      swal("Done!", `${action} success!`, "success", {
        button: false,
        timer: 2900,
      });
    })
    .then(() => setTimeout(() => history.push("/"), 3000))
    .catch((e) => {
      e.response
        ? swal("Error!", e.response.data.msg, "error", {
            button: false,
            timer: 2900,
          })
        : swal(
            "Error!",
            "Could not reach server, try again in a few minutes",
            "error",
            { button: false, timer: 2900 }
          );
      dispatch(setUserActionError());
    });
};
