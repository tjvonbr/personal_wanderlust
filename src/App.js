import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Trip from "./components/Tours/Trip";
import Login from './components/Login';
import Register from './components/Register';

import './App.css';
import '../src/sass/index.scss';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <Router>
      <Route path="/trip" component={Trip}/>
    <div className="App">
      <h1>Welcome to Wanderlust!</h1>
      <Login />
      <Register />
    </div>
    </Router>
  );
}

export default App;
