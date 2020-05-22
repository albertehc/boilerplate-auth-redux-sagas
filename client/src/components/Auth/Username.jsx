import React from "react";

export const Username = ({placeholder, register, errors }) => (
  <div>
    <input
      type="text"
      placeholder={placeholder}
      name="username"
      ref={register({
        required: { value: true, message: "Username can't be empty" },
        maxLength: { value: 20, message: "Username max length is 20" },
        pattern: {
          value: /^[a-zA-Z0-9_]*$/i,
          message: "Username can only be alphanumeric",
        },
      })}
    />
    {errors.username && <span className="">{errors.username.message}</span>}
  </div>
);
