import React from "react";
import { Link } from "react-router-dom";
import { Image } from "./Brand.styles";
import logo from "./../../assets/images/logo.png";

export default React.memo(() => (
  <Link to="/">
    <Image src={logo} alt="Company Logo" />
  </Link>
));
