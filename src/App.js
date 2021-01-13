import React, { useEffect } from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import PageNotFound from "./Utilities/PageNotFound";
import Home from "./components/sections/Home/Home";
import Routes from "./Utilities/Routes";
import ProtectedRoute from "./Utilities/ProtectedRoute";
import AdminRoute from "./Utilities/AdminRoute";
import AuthenticationPage from "./components/auth/AuthPage";
import PublicShop from "./components/sections/PublicShop/PublicShop";
import { useDispatch } from "react-redux";
import { selectedShopId } from "./action/shopAction";
import { selectedShopName } from "./action/shopAction";
import { shopIdsAction } from "./action/shopAction";

import { getShopIds } from "./services/dashboardService";

function App() {
  const routes = Routes();
  let dispatch = useDispatch();
  useEffect(() => {
    shopsIdsCollections();
  }, []);
  let shopsIdsCollections = async () => {
    let { data } = await getShopIds();
    if (data.Success && data.Details.length > 0) {
      dispatch(shopIdsAction(data.Details));
      dispatch(selectedShopId(data.Details[0].shop));
      dispatch(selectedShopName(data.Details[0].shop_name));
    }
  };

  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/">
          <AuthenticationPage />
        </Route> */}
        <Route
          exact
          path="/"
          render={(props) => {
            if (localStorage.getItem("token") === null) {
              return <AuthenticationPage {...props} />;
            }
            return <Redirect to="/dashboard" />;
          }}
        />
        <Route exact path="/page-not-found">
          <PageNotFound />
        </Route>
        <Route path="/shopPreview">
          <PublicShop />
        </Route>
        <Home>
          <Switch>
            {/* {routes.map((route) => {
              return (
                <ProtectedRoute exact path={route.path} key={route.path}>
                  <route.component />
                </ProtectedRoute>
              );
            })} */}
            {routes.map((route) => {
              return (
                <ProtectedRoute
                  exact
                  path={route.path}
                  component={route.component}
                />
              );
            })}

            <Route path="*">
              <Redirect to="/page-not-found" />
            </Route>
          </Switch>
        </Home>
      </Switch>
    </div>
  );
}

export default App;

// import React from "react";
// import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
// // import Dashboard from "../components/sections/Dashboard/Dashboard";
// import Dashboard from "./components/sections/Dashboard/Dashboard";
// import "./App.css";

// function App() {
//   return (
//     <Switch>
//       <Route exact path="/" component={Dashboard} />
//     </Switch>
//   );
// }

// export default App;
