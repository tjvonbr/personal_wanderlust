import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

import './App.css';
import '../src/sass/index.scss';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      <Dashboard />
    </div>
  );
}

export default App;
