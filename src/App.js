import React from 'react';

import './App.css';
import './pages/homepage/hompages.component'
import Homepage from './pages/homepage/hompages.component';
import { Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shopPage/shop.component'  

const Hats=()=>(
  <div>
   <h1> hats</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/shop" component={ShopPage}/>
      </Switch>
      


    </div>
  );
}

export default App;
