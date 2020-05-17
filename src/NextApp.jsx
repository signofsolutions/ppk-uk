import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "containers/App";
import { UserProvider } from "./context/User";

function NextApp() {
  return (
    <UserProvider>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </UserProvider>
  );
}

export default NextApp;
