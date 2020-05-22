import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "./../context/auth/authContext";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const [{ logged }] = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) =>
        !logged ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};
