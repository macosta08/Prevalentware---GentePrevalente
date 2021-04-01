import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Form } from "../form/Form";

import { MainView } from "../mainView/MainView";
import { Navbar } from "../navbar/Navbar";

export const AppRouters = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/archivo" component={Form} />
        <Route path="/" component={MainView} />
      </Switch>
    </Router>
  );
};
