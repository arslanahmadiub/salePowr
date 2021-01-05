import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import PageNotFound from "./Utilities/PageNotFound";
import Home from "./components/sections/Home/Home";
import Routes from "./Utilities/Routes";
import ProtectedRoute from "./Utilities/ProtectedRoute";
import AuthenticationPage from "./components/auth/AuthPage";

function App() {
  const routes = Routes();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <AuthenticationPage />
        </Route>
        <Route exact path="/page-not-found">
          <PageNotFound />
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
