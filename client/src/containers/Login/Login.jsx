import React from "react";
import { useForm } from "react-hook-form";
import Form from "./styles";
import { useDispatch } from "react-redux";
import Input from "./../../components/Input";
import * as validation from "./../../helpers/auth/authValidations";
import * as A from "./../../redux/auth/actions/auth.actions";

export default () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    dispatch(A.loginRequest(data))
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete={"off"}
      >
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
          validation={validation.password()}
        />
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};
