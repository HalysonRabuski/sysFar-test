import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

export const ProtectedRoute = (props) => {
  const auth = useAuth();

  console.log(auth);

  return auth.jwt ? (
    <Route exact path={props.path} component={props.component} />
  ) : (
    <Redirect to={{ pathname: "/sign" }} />
  );
};
