import React from "react";
import App from "./app";
import { Switch, Route } from "react-router-dom";

function NextApp() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  );
}

export default NextApp;
