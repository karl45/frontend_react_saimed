import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing/Landing";
import LandingMedic from "./components/landing/LandingMedic";
import MedPage from "./components/landing/MedPage";
import PatientCabinet from "./components/patientCabinet/PatientCabinet";

const App = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/cabinet">
          <PatientCabinet />
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
};

export default App;
