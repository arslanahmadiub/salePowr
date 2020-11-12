import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import ProtectedRoute from "./Utilities/ProtectedRoute"
import Home from "./components/sections/Home/Home"
import Wallet from './components/sections/Wallet/Wallet';
import ShopProfileEdit from './components/sections/ShopProfile/ShopProfileEdit';
import Transactions from "./components/sections/Transactions/Transactions"
import CreateTransaction from "./components/sections/Transactions/CreateTransaction"
import Dashboard from './components/sections/Dashboard/Dashboard';
import ProfileEdit from './components/sections/Profile/ProfileEdit';
import AuthenticationPage from './components/auth/AuthPage';

function App() {

  return (
    <div className="App">

      <Router>
        <Switch>
          <ProtectedRoute exact path="/user-authentication">
            <AuthenticationPage />
          </ProtectedRoute >

          <Home>
            <Switch>
              <ProtectedRoute path="/edit-profile">
                <ProfileEdit />
              </ProtectedRoute >
              <ProtectedRoute path='/create-transaction'>
                <CreateTransaction />
              </ProtectedRoute >
              <ProtectedRoute path="/wallet">
                <Wallet />
              </ProtectedRoute >
              <ProtectedRoute path="/transactions">
                <Transactions />
              </ProtectedRoute >
              <ProtectedRoute path="/shop-profile-edit">
                <ShopProfileEdit />
              </ProtectedRoute >
              <ProtectedRoute path={["/", "/dashboard"]}>
                <Dashboard />
              </ProtectedRoute >

            </Switch>
          </Home>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
