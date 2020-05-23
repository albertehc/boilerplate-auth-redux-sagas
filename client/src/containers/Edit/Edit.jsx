import React, { useEffect } from "react";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Form from "./styles";
import Select from "../../components/Select";
import { languages, themes } from "./../../constants";
import Input from "./../../components/Input";
import * as validation from "./../../helpers/auth/authValidations";
import * as A from "./../../redux/auth/actions/auth.actions";

export default () => {
  const { register, handleSubmit, errors, watch, setValue } = useForm();
  const dispatch = useDispatch();
  const { email, username, language, theme } = useSelector(
    (state) => state.auth
  );
  const password = watch("password", "");
  const oldPassword = watch("oldPassword", "");

  const onSubmit = (data) => {
    delete data.password_repeat;
    dispatch(A.editRequest(data));
  };

  const deleteUser = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover you account!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      content: {
        element: "input",
        attributes: {
          placeholder: "Type your password",
          type: "password",
        },
      },
    }).then((password) => {console.log(password); dispatch(A.deleteRequest(password)) });
  };
  //   swal({
  //     title: "Are you sure?",
  //     text: "Once deleted, you will not be able to recover you account!",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //     content: {
  //       element: "input",
  //       attributes: {
  //         placeholder: "Type your password",
  //         type: "password",
  //       },
  //     },
  //   }).then((password) => {
  //     if (password) {
  //       remove({ password })
  //         .then(() => {
  //           dispatch(setUserActionError());
  //           swal("Done!", `User deleted!`, "success", {
  //             button: false,
  //             timer: 2900,
  //           });
  //           history.push("/");
  //         })
  //         .catch((e) => {
  //           swal("Error!", "Password incorrect", {
  //             button: false,
  //             timer: 2900,
  //           });
  //         });
  //     } else
  //       swal("Error!", "Password empty!", {
  //         button: false,
  //         timer: 1900,
  //       });
  //   });
  // };

  useEffect(() => {
    setValue("email", email);
    setValue("username", username);
    setValue("language", language);
    setValue("theme", theme);
  }, [email, username, setValue, language, theme]);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
        <Input
          placeholder="Email"
          type="text"
          validation={validation.email}
          name={"email"}
          error={errors}
          register={register}
        />
        <Input
          placeholder="Username"
          name="username"
          type="text"
          error={errors}
          register={register}
          validation={validation.username}
        />
        <Input
          placeholder="Password"
          name="oldPassword"
          type="password"
          error={errors}
          register={register}
          validation={validation.password()}
        />
        <Input
          placeholder="New Password"
          name="password"
          type="password"
          error={errors}
          register={register}
          validation={validation.password(oldPassword)}
        />
        <Input
          placeholder="Repeat New Password"
          name="password_repeat"
          type="password"
          error={errors}
          register={register}
          password={password}
          validation={validation.repeatPassword(password)}
        />
        <Select type="language" register={register} selects={languages} />
        <Select type="theme" register={register} selects={themes} />
        <button type="submit">Submit</button>
      </Form>
      <button onClick={() => deleteUser()}>Delete Account</button>
    </>
  );
};
