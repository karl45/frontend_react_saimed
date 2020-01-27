import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Landing from './components/landing/Landing';
import LandingAuth from './components/landing/LandingAuth';

const App = props => {
  return (
  <Router>

  <Switch>
    <Route exact path="/">
        <Landing/>
    </Route>
         <Route path="/LandingAuth">
           <LandingAuth/>
         </Route>

         </Switch>
  </Router>

  
  );
}

export default App;
