import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SemanticTrip from "./components/Trip";
import Login from './components/routes/Login';
import Dashboard from './components/routes/Dashboard';
import TripList from './components/routes/TripList';
import UserProfile from './components/routes/user/UserProfile';
import Navbar from './components/Navbar';
import Contact from './components/routes/Contact';

import "./App.css";
import "../src/sass/index.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Switch>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={Dashboard} />
        <Route path="/about" />
        <Route path="/trips" component={TripList} />
        <Route exact path="/trip" component={SemanticTrip}/>
        <Route path="/userprofile" component={UserProfile} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
