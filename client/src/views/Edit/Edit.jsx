import React from "react";
import {Helmet} from "react-helmet-async";
import Edit from "./../../containers/Edit";

export default () => (
    <>
        <Helmet>
            <title>Edit</title>
            <meta name="description" content="Edit Page" />
        </Helmet>
        <Edit />
    </>
);
