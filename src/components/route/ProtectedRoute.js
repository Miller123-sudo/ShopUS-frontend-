import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const protectedRoute = ({ component: Component, ...rest }) => {
  const { loading, user, isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <Redirect to="/login" />;
            }
            return <Component {...props} />;
          }}
        ></Route>
      )}
    </Fragment>
  );
};

export default protectedRoute;
