import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import './App.css';
import ProductDetail from './pages/Product/ProductDetail';

import {CartProvider} from'./Context/Cart';

function App() {
  return (
    <CartProvider>
    <Router>
      <div className='App'>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/shop' exact component={Shop}/>
        <Route path='/men' exact component={Shop}/>
        <Route path='/woman' exact component={Shop}/>
        <Route path='/woman/:cate' exact component={Shop}/>
        <Route path='/men/:cate' exact component={Shop}/>
        <Route path='/products/:id' exact component={ProductDetail}/>
      </Switch>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
