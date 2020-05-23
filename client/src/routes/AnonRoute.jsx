import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const AnonRoute = ({ component: Component, ...rest }) => {
  const { logged } = useSelector(state => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        logged ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
