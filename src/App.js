import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import TripList from './components/Tours/TripList';

import './App.css';
import '../src/sass/index.scss';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* <Login /> */}
        {/* <Register /> */}
        <Dashboard />
      </div>

      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Dashboard} />
        <Route path="/about" />
        <Route path="/trips" component={TripList} />
        <Route path="/contact" />
      </Switch>
    </Router>
  );
}

export default App;
