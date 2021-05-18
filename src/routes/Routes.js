import React from "react";
import { Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Clients from "../pages/Clients";
import NewClient from "../pages/Clients/NewClient";
import EditClient from "../pages/Clients/EditClient";
import SignIn from "../pages/SignIn";

function Routes() {
  return (
    <Switch>
      <ProtectedRoute exact path="/clients" component={Clients} />
      <ProtectedRoute path="/clients/novo" component={NewClient} />
      <ProtectedRoute path="/clients/:id" component={EditClient} />
      {/* <Route exact path="/clients/novo" component={NewClient} /> */}
      <Route exact path="/sign" component={SignIn} />
    </Switch>
  );
}

export default Routes;
