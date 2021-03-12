import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ProductDetail from './pages/Product/ProductDetail';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Signup';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';


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
        <Route path='/shop/:cate' exact component={Shop}/>
        <Route path='/woman' exact component={Shop}/>
        <Route path='/woman/:cate' exact component={Shop}/>
        <Route path='/men/:cate' exact component={Shop}/>
        <Route path='/products/:id' exact component={ProductDetail}/>
        <Route path='/checkout' exact component={Checkout}/>
        <Route path='/signup' exact component={Login}/>
        <Route path='/news' exact component={News}/>
        <Route path='/contact' exact component={Contact}/>
      </Switch>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
