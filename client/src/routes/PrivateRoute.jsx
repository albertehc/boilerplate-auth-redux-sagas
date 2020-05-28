import React from "react";
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";

export const PrivateRoute = ({component: Component, ...rest}) => {
    const {logged} = useSelector(state => state.auth);

    return (
        <Route
            {...rest}
            render={(props) =>
                !logged ? <Redirect to="/login" /> : <Component {...props} />
            }
        />
    );
};
