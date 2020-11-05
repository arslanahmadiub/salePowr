import React from 'react';
import "./App.css"
import { BrowserRouter as Router, useHistory, Route, Switch } from "react-router-dom"
import Home from "./components/sections/Home/Home"
import { dashboardData, walletBalance } from './DummyData/DummyData';
import Wallet from './components/sections/Wallet/Wallet';
import ShopProfileEdit from './components/sections/ShopProfile/ShopProfileEdit';
import Transactions from "./components/sections/Transactions/Transactions"
import CreateTransaction from "./components/sections/Transactions/CreateTransaction"
import Dashboard from './components/sections/Dashboard/Dashboard';
import ProfileEdit from './components/sections/Profile/ProfileEdit';
import AuthenticationPage from './components/auth/AuthPage';
import { AuthContext } from './contexts/AuthContext';


function App() {

  const history = useHistory();

  const { user } = React.useContext(AuthContext);
  console.log(user);

  React.useEffect(() => {
    if (user == null) {
      history.replace('/user-authentication')
      // history.push('/user-authentication')
    }
  }, [user])



  return (
    <div className="App">

      <Router>
        <Home>
          <Switch>
            <Route path="/edit-profile">
              <ProfileEdit />
            </Route>
            <Route path='/create-transaction'>
              <CreateTransaction />
            </Route>
            <Route path="/wallet">
              <Wallet balance={walletBalance} />
            </Route>
            <Route path="/user-authentication">
              <AuthenticationPage />
            </Route>
            <Route path="/transactions">
              <Transactions />
            </Route>
            <Route path="/shop-profile-edit">
              <ShopProfileEdit key={2} name="Ebenezer Ghanney" />
            </Route>
            <Route path={["/", "/dashboard"]}>
              <Dashboard data={dashboardData} />
            </Route>

          </Switch>
        </Home>
      </Router>
    </div>
  );
}

export default App;
