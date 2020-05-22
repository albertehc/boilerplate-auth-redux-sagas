import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Form } from "./styles";
import { Email } from "../../components/Auth/Email";
import { Username } from "../../components/Auth/Username";
import { Password } from "../../components/Auth/Password";
import { RepeatPassword } from "../../components/Auth/RepeatPassword";
import { submitApi } from "../../helpers/submitApi.js";
import { signup } from "../../api/auth.api";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "./../../context/auth/authContext";
import { Select } from "./../../components/Auth/Select";
import { languages, themes } from "./../../constants";

export const Signup = () => {
  const history = useHistory();
  const [, dispatch] = useAuthContext();
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => {
    submitApi({ data, api: signup, action: "Submit", history, dispatch });
  };

  return (
    <>
      <Helmet>
        <title>Signup</title>
        <meta name="description" content="Signup Page" />
      </Helmet>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
        <Email placeholder={"Email"} register={register} errors={errors} />
        <Username
          placeholder={"Username"}
          register={register}
          errors={errors}
        />
        <Password
          name={"password"}
          placeholder={"Password"}
          edit={false}
          register={register}
          errors={errors}
        />
        <RepeatPassword
          password={password}
          placeholder={"Repeat Password"}
          register={register}
          errors={errors}
        />
        <Select type='language' register={register} selects={languages} />
        <Select type='theme' register={register} selects={themes}/>
        <input type="submit" />
      </Form>
    </>
  );
};
