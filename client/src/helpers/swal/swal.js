import swal from "sweetalert";

export const success = (action) =>
  swal("Done!", `${action} success!`, "success", {
    button: false,
    timer: 2900,
  });

export const error = (e) =>
  e
    ? swal("Error!", e, "error", {
        button: false,
        timer: 2900,
      })
    : swal(
        "Error!",
        "Could not reach server, try again in a few minutes",
        "error",
        { button: false, timer: 2900 }
      );
