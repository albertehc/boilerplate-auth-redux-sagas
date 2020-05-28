import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Loader from "react-loader-spinner";
import Container from "./containers";
import Views from "./views";
import * as A from "./redux/auth/actions/auth.actions";
import {Routes} from "./constants/";
import {AnonRoute} from "./routes/AnonRoute";
import {PrivateRoute} from "./routes/PrivateRoute";

const App = () => {
    const dispatch = useDispatch();
    const {logged, loading} = useSelector((state) => state.auth);
    useEffect(() => {
        if (!logged) {
            dispatch(A.meRequest());
        }
        // eslint-disable-next-line
    }, []);
    if (loading)
        return <Loader color="#158AFF" className="loader" type="ThreeDots" />;
    return (
        <Router>
            <Container.Navbar />
            <Switch>
                <Route exact path={Routes.HOME} component={Views.Home} />
                <AnonRoute exact path={Routes.LOGIN} component={Views.Login} />
                <AnonRoute exact path={Routes.SIGNUP} component={Views.Signup} />
                <PrivateRoute exact path={Routes.EDIT} component={Views.Edit} />
            </Switch>
            <Container.Footer />
        </Router>
    );
};

export default App;
