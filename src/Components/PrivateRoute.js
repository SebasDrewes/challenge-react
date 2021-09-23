import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ token, path, exact, component }) => {
  return token ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
