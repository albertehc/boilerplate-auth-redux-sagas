import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Form } from "./styles";
import { Email } from "../../components/Auth/Email";
import { Password } from "../../components/Auth/Password";
import { login } from "./../../api/auth.api";
import { useAuthContext } from "./../../context/auth/authContext";
import { useHistory } from "react-router-dom";
import { submitApi } from "../../helpers/submitApi.js";

export const Login = () => {
  const [, dispatch] = useAuthContext();
  const history = useHistory();
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    submitApi({ data, api: login, action: "Login", history, dispatch });
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="Login Page"
        />
      </Helmet>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
        <Email placeholder={"Email"} register={register} errors={errors} />
        <Password
          name={"password"}
          edit={false}
          placeholder={"Password"}
          register={register}
          errors={errors}
        />
        <input type="submit" />
      </Form>
    </>
  );
};
