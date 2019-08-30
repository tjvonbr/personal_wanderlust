import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SemanticTrip from "./components/SemanticTrip";
import LoginModal from './components/LoginModal';
import Dashboard from './components/Dashboard';
import TripList from './components/TripList';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';

import "./App.css";
import "../src/sass/index.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Switch>
        <Route path="/login" component={LoginModal}/>
        <Route exact path="/" component={Dashboard} />
        <Route path="/about" />
        <Route path="/trips" component={TripList} />
        <Route exact path="/trip" component={SemanticTrip}/>
        <Route path="/userprofile" component={UserProfile} />
        <Route path="/contact" component={ContactForm} />
      </Switch>
    </Router>
  );
}

export default App;
