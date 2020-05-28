import React from "react";
import {Image} from "./Brand.styles";
import logo from "./../../assets/images/logo.png";
import {Link} from "react-router-dom";

export default React.memo(() => (
    <Link to="/">
        <Image src={logo} alt="Company Logo" />
    </Link>
));
