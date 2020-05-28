import React from "react";
import {Helmet} from "react-helmet-async";
import Login from "./../../containers/Login";

export default () => (
    <>
        <Helmet>
            <title>Login</title>
            <meta name="description" content="Login Page" />
        </Helmet>
        <Login />
    </>
);
