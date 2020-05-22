import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "./../context/auth/authContext";

export const AnonRoute = ({ component: Component, ...rest }) => {
  const [{ logged }] = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) =>
        logged ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
