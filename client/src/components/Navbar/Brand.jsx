import React from "react";
import { Image } from "./Brand.styles";
import logo from "./../../assets/images/logo.png";

export default React.memo(() => <Image src={logo} alt="Company Logo" />);
