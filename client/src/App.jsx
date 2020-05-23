import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Loader from "react-loader-spinner";
import Navbar from "./containers/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./views/Home/Home";
import Signup from "./views/Signup";
import Login from "./views/Login/Login";
import Edit from "./views/Edit";
import { Routes } from "./constants/";
import { AnonRoute } from "./routes/AnonRoute";
import { PrivateRoute } from "./routes/PrivateRoute";
import { me } from "./api/auth.api";
import { setUserAction, setUserActionError } from "./context/auth/authActions";

const App = () => {
  //const [{ logged, loading }, dispatch] = useAuthContext();
  // useEffect(() => {
  //   if (!logged) {
  //     me().then((res) => {
  //       if (res?.msg !== "Unauthorized") {
  //         dispatch(setUserAction(res));
  //       } else {
  //         dispatch(setUserActionError());
  //       }
  //     });
  //   }
  //   // eslint-disable-next-line
  // }, []);
  // if (loading)
  //   return (
  //     <>
  //       <Loader color="#158AFF" className="loader" type="ThreeDots" />
  //     </>
  //   );
  return (
    <Router>
      <Helmet titleTemplate={`%s - ${process.env.REACT_APP_WEBNAME}`} defaultTitle={process.env.REACT_APP_WEBNAME}>
        <meta name="description" content={process.env.REACT_APP_WEBNAME} />
      </Helmet>
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
