import React from "react";
import { Helmet } from "react-helmet-async";
import Signup from "./../../containers/Signup";

export default () => (
  <>
    <Helmet>
      <title>Signup</title>
      <meta name="description" content="Signup Page" />
    </Helmet>
    <Signup />
  </>
);
