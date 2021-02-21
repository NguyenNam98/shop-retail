import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Navbar'

export default function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/">
        
          </Route>
          <Route path="/users">
         
          </Route>
          <Route path="/">
          
          </Route>
        </Switch>
      </div>
    </Router>
  );
}