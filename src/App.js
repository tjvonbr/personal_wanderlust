import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Trip from "./components/Tours/Trip";
import Login from './components/LoginModal';
import Dashboard from './components/Dashboard';
import TripList from './components/Tours/TripList';

import './App.css';
import '../src/sass/index.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Dashboard />
      </div>

      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Dashboard} />
        <Route path="/about" />
        <Route path="/trips" component={TripList} />
        <Route path="/trip" component={Trip}/>
        <Route path="/contact" />
      </Switch>
    </Router>
  );
}

export default App;
