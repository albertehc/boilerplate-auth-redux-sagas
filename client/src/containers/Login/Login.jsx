import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Form } from "./styles";
import { login } from "./../../api/auth.api";
import { useHistory } from "react-router-dom";
import { submitApi } from "../../helpers/submitApi.js";
import { useDispatch } from "react-redux";
import Input from "./../../components/Input";
import * as validation from "./../../helpers/auth/authValidations";


export default () => {
  const history = useHistory();
  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = (data) => {
    submitApi({ data, api: login, action: "Login", history });
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
      <Input
          placeholder="Email"
          type="text"
          validation={validation.email}
          name={"email"}
          error={errors}
          register={register}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          error={errors}
          register={register}
          validation={validation.password}
        />
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};
