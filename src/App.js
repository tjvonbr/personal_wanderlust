import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Trip from "./components/Tours/Trip";
import Login from './components/LoginModal';
import Dashboard from './components/Dashboard';
import TripList from './components/Tours/TripList';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
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
        <Route exact path="/trip" component={Trip}/>
        <Route path="/userprofile" component={UserProfile} />
        <Route path="/contact" />
      </Switch>
    </Router>
  );
}

export default App;
