import React from "react";

export const RepeatPassword = ({ placeholder, password, register, errors }) => {
  let validation = {};
  if (password.current) validation = {
    required: "The passwords do not match",
    validate: (value) =>
      value === password.current || "The passwords do not match",
  }

  return (<div>
    <input
      name="password_repeat"
      placeholder={placeholder}
      type="password"
      ref={register(validation)}
    />
    {errors.password_repeat && (
      <span className="">{errors.password_repeat.message}</span>
    )}
  </div>)
};
