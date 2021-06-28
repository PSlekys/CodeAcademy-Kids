import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navigation } from "./components";
import { Home, Login, Register } from "./pages";

const Routes = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </Router>
);

export default Routes;
