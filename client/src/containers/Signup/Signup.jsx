import React from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Form from "./styles";
import Select from "../../components/Select";
import { languages, themes } from "./../../constants";
import Input from "./../../components/Input";
import * as validation from "./../../helpers/auth/authValidations";
import A from "./../../redux/auth/actions";

export default () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, watch, getValues } = useForm();
  const password = getValues('password')
  const onSubmit = (data) => {
    delete data.password_repeat;
    dispatch(A.signupRequest(data));
  };

  return (
    <>
      <Helmet>
        <title>Signup</title>
        <meta name="description" content="Signup Page" />
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
          placeholder="Username"
          name="username"
          type="text"
          error={errors}
          register={register}
          error={errors}
          validation={validation.username}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          error={errors}
          register={register}
          validation={validation.password}
        />
        <Input
          placeholder="Repeat Password"
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
    </>
  );
};