import React from "react";
import ReactDOM from "react-dom";
// import ReactGA from "react-ga";
// import TagManager from "react-gtm-module";
import NextApp from "./NextApp";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

const Index = () => <NextApp />;
// const tagManagerArgs = {
//   gtmId: "GTM-MRMBT5Z",
// };

// ReactGA.initialize("UA-165158199-1");
// ReactGA.pageview(window.location.pathname + window.location.search);
// TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <Router>
    <Index />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
