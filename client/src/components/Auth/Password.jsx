import React from "react";

export const Password = ({ name, placeholder, register, errors, edit }) => {
  let validation = {
    required: "You must specify a password",
    minLength: {
      value: 8,
      message: "Password must have at least 8 characters",
    },
  };
  if (edit)
    validation = {
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    };

  return (
    <div>
      <input
        name={name}
        type="password"
        placeholder={placeholder}
        ref={register(validation)}
      />
      {errors[name] && <span className="">{errors[name].message}</span>}
    </div>
  );
};
