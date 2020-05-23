import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import Navbar from "./containers/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./views/Home/Home";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Edit from "./views/Edit";
import * as A from "./redux/auth/actions/auth.actions";
import { Routes } from "./constants/";
import { AnonRoute } from "./routes/AnonRoute";
import { PrivateRoute } from "./routes/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const { logged, loading } = useSelector(state => state.auth);
  useEffect(() => {
    if (!logged) {
      dispatch(A.meRequest());
    }
    // eslint-disable-next-line
  }, []);
  if (loading)
    return (
      <>
        <Loader color="#158AFF" className="loader" type="ThreeDots" />
      </>
    );
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <AnonRoute exact path={Routes.LOGIN} component={Login} />
        <AnonRoute exact path={Routes.SIGNUP} component={Signup} />
        <PrivateRoute exact path={Routes.EDIT} component={Edit} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
