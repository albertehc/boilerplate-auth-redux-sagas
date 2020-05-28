import React from "react";
import {Helmet} from "react-helmet-async";

export default React.memo(() => (
    <div>
        <Helmet>
            <title>Home</title>
            <meta name="description" content="Home Page" />
        </Helmet>
        Home
    </div>
));
