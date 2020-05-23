import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { Form } from "./styles";
import { Password } from "../../components/Auth/Password";
import { RepeatPassword } from "../../components/Auth/RepeatPassword";
import { useAuthContext } from "./../../context/auth/authContext";
import { setUserActionError } from "./../../context/auth/authActions";
import { edit, remove } from "../../api/auth.api";
import { submitApi } from "../../helpers/submitApi.js";
import Select from "../../components/Select";
import { languages, themes } from "./../../constants";
import Input from "./../../components/Input";

export default () => {
  return null
  const { register, handleSubmit, errors, watch, setValue } = useForm();
  const [{ username, email, language, theme }, dispatch] = useAuthContext();
  const history = useHistory();
  const password = useRef({});
  const oldPassword = useRef({});
  oldPassword.current = watch("oldPassword", "");
  password.current = watch("password", "");

  const onSubmit = (data) => {
    submitApi({ data, api: edit, action: "Edit", history, dispatch });
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
    }).then((password) => {
      if (password) {
        remove({ password })
          .then(() => {
            dispatch(setUserActionError());
            swal("Done!", `User deleted!`, "success", {
              button: false,
              timer: 2900,
            });
            history.push("/");
          })
          .catch((e) => {
            swal("Error!", "Password incorrect", {
              button: false,
              timer: 2900,
            });
          });
      } else
        swal("Error!", "Password empty!", {
          button: false,
          timer: 1900,
        });
    });
  };

  useEffect(() => {
    setValue("email", email);
    setValue("username", username);
    setValue("language", language);
    setValue("theme", theme);
  }, [email, username, setValue, language, theme]);

  return (
    <>
      <Helmet>
        <title>Edit</title>
        <meta name="description" content="Edit Page" />
      </Helmet>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
        <Input
          placeholder="Email"
          type="text"
          validation={{
            required: { value: true, message: "Email can't be empty" },
            maxLength: 80,
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email address",
            },
          }}
          name={"email"}
          register={register}
          errors={errors}
        />
        {errors.email && <span className="">{errors.email.message}</span>}
        <Input
          placeholder="Username"
          name="username"
          type="text"
          register={register}
          errors={errors}
          validation={{
            required: { value: true, message: "Username can't be empty" },
            maxLength: { value: 20, message: "Username max length is 20" },
            pattern: {
              value: /^[a-zA-Z0-9_]*$/i,
              message: "Username can only be alphanumeric",
            },
          }}
        />
        <Password
          name={"oldPassword"}
          placeholder={"Password"}
          edit={false}
          register={register}
          errors={errors}
        />
        <Password
          name={"password"}
          placeholder={"New Password"}
          edit={true}
          register={register}
          errors={errors}
        />
        <RepeatPassword
          placeholder={"Repeat New Password"}
          password={password}
          register={register}
          errors={errors}
        />
        <Select type="language" register={register} selects={languages} />
        <Select type="theme" register={register} selects={themes} />
        <input type="submit" />
      </Form>
      <button onClick={() => deleteUser()}>Delete Account</button>
    </>
  );
};
