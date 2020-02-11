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
import LandingMedic from './components/landing/LandingMedic';
import MedPage from './components/landing/MedPage';


const App = props => {
  return (
  <Router>
  <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
         <Route path="/LandingAuth">
           <LandingAuth/>
         </Route>
         <Route path="/LandingMedic">
           <LandingMedic />
         </Route>
         <Route path="/MedPage">
           <MedPage />
         </Route>
  </Switch>
  </Router>

  
  );
}

export default App;
