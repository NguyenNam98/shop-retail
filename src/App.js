import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop'
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/shop' exact component={Shop}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
