import React from "react";
import Footer from "../Footer";
import App from "routes/index";
import { useRouteMatch } from "react-router-dom";

export default function MainApp() {
  const match = useRouteMatch();

  return (
    <div>
      <App match={match} />
      <Footer />
    </div>
  );
}
