import React, { useContext, useEffect, lazy, Suspense } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { UserContext } from "context/User";

import "assets/styles/style.scss";
require("bootstrap");

const MainApp = lazy(() => import("./MainApp"));
const Booking = lazy(() => import("routes/Booking"));

const RestrictedRoute = ({ component: Component, user, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);

function App() {
  const { user, loader } = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  // useEffect(() => {
  //   if(user && location.pathname === '/signin' ){
  //     history.push('/');
  //   }

  // }, [user, location, history]);
  if (loader) {
    return <div />;
  }
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: "100%",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      }
    >
      <Switch>
        <Route exact path="/Booking" component={Booking} />
        <RestrictedRoute
          path={`${match.url}`}
          user={user}
          location={location}
          component={MainApp}
        />
      </Switch>
    </Suspense>
  );
}

export default App;
