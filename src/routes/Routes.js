import React from "react";
import { Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Clients from "../pages/Clients";
import NewClient from "../pages/Clients/NewClient";
import EditClient from "../pages/Clients/EditClient";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import Homepage from "../pages/Homepage";

function Routes() {
  return (
    <Switch>
      <ProtectedRoute exact path="/clientes" component={Clients} />
      <ProtectedRoute path="/clientes/novo" component={NewClient} />
      <ProtectedRoute path="/clientes/:id" component={EditClient} />
      {/* <Route exact path="/clients/novo" component={NewClient} /> */}
      <Route exact path="/sign" component={SignIn} />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/registrar" component={Register} />
    </Switch>
  );
}

export default Routes;
