import React from "react";

export const Email = ({placeholder, register, errors }) => (
  <div>
    <input
      type="text"
      placeholder={placeholder}
      name="email"
      ref={register({
        required: { value: true, message: "Email can't be empty" },
        maxLength: 80,
        pattern: {
          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "Invalid email address",
        },
      })}
    />
    {errors.email && <span className="">{errors.email.message}</span>}
  </div>
);
