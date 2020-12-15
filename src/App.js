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
        <Route exact path="/user-authentication">
          <AuthenticationPage />
        </Route>
        <Route exact path="/page-not-found">
          <PageNotFound />
        </Route>

        <Home>
          <Switch>
            {routes.map((route) => {
              return (
                <ProtectedRoute exact path={route.path} key={route.path}>
                  <route.component />
                </ProtectedRoute>
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
