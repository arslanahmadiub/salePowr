import React from 'react';
import Home from "./components/sections/Home"
import ShopProfileEdit from './components/sections/ShopProfile/ShopProfileEdit';
import Transactions from './components/sections/Transactions/Transactions';
import CreateTransaction from './components/sections/Transactions/CreateTransaction';
import ProductDisplay from './components/sections/ProductDisplay/ProductDisplay';
import ProductDetails from './components/sections/ProductDisplay/ProductDetails';
import { products } from './DummyData/DummyData';
function App() {
  return (
    <div className="App">

      <ProductDetails product={products[0]} />
      {/* <ProductDisplay /> */}

      {/* <Home>
        <CreateTransaction />
        <h1>Overveiw will be here</h1>
        <ShopProfileEdit key={2} name="Ebenezer Ghanney" />
        <Transactions />
        <h1>analytics will be here</h1>
        <h1>Wallet will be here</h1>
        <h1>Delivery will be here</h1>
      </Home> */}

    </div>
  );
}

export default App;
