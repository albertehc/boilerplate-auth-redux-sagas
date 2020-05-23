export const email = {
  required: { value: true, message: "Email can't be empty" },
  maxLength: 80,
  pattern: {
    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Invalid email address",
  },
};

export const username = {
  required: { value: true, message: "Username can't be empty" },
  maxLength: { value: 20, message: "Username max length is 20" },
  pattern: {
    value: /^[a-zA-Z0-9_]*$/i,
    message: "Username can only be alphanumeric",
  },
};

export const password = {
  required: "You must specify a password",
  minLength: {
    value: 8,
    message: "Password must have at least 8 characters",
  },
};

export const repeatPassword = (password) => ({
  required: "The passwords do not match",
  validate: (value) =>
    value === password || "The passwords do not match",
});
