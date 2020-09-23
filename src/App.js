import React from 'react';
import "./App.css"
import Home from "./components/sections/Home"
import { dashboardData, walletBalance } from './DummyData/DummyData';
import Wallet from './components/sections/Wallet/Wallet';
import ShopProfileEdit from './components/sections/ShopProfile/ShopProfileEdit';
import Transactions from "./components/sections/Transactions/Transactions"
import CreateTransaction from "./components/sections/Transactions/CreateTransaction"
import Dashboard from './components/sections/Dashboard/Dashboard';
import Select from './components/CustomComponents/Select';
import ProductDisplay from "./components/sections/ProductDisplay/ProductDisplay"




function App() {
  return (
    <div className="App">

      <Home>
        <CreateTransaction />
        <Dashboard data={dashboardData} />
        <ShopProfileEdit key={2} name="Ebenezer Ghanney" />
        <Transactions />
        <Wallet balance={walletBalance} />
      </Home>

    </div>
  );
}

export default App;
