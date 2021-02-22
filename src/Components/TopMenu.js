import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Navbar'
import Signup from '../pages/Signup'

export default function TopMenu() {
  return (
    <Router> 
        <Navbar/>
        <Switch>
          <Route path='/signup' exact component={Signup}>
          </Route>
        </Switch>  
    </Router>
  );
}