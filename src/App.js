import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import Product from './Components/Product/ProductView';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/products' exact component={Product}/>
      </Switch>

    </Router>
  );
}

export default App;
