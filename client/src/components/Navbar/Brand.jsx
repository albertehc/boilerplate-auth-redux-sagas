import React from "react";
import { Image } from "./Brand.styles";
import logo from './../../assets/images/logo.png'

export const Brand = React.memo(() => {
  return <Image
    src={logo}
    alt="Company Logo" />;
});