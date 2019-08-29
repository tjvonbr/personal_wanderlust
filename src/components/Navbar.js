import React, { useState } from "react";
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LoginModal from "./LoginModal";


const NavBar = props => {
  const [loginOpen, setLoginOpen] = useState(false);

  const closeLogin = () => {
    setLoginOpen(false);
  }

  return (
    <div className="navbar-wrapper">
      <div id="app-title">Wanderlust</div>
      <nav className="navbar">
        <ul className="navbar-list">
          <Link to="/">
            <li className="navbar-item">Home</li>
          </Link>
          <Link to="/trips">
            <li className="navbar-item">Available Trips</li>
          </Link>
          <Link to="/userprofile">
            <li className="navbar-item">My Trips</li>
          </Link>
          <Link to="/contact">
            <li className="navbar-item">Contact Us</li>
          </Link>
          <li className="navbar-item"
              onClick = {() => setLoginOpen(true)} >
                Login/Register
          </li>
          <LoginModal
            key="loginModal"
            loginOpen={loginOpen}
            closeLogin={closeLogin}
            handleClose={() => setLoginOpen(false)} />
        </ul>
      <div className="secondary-color"></div>
      </nav>
      <nav className="social-nav">
        <Icon name="facebook" className="social-icon" size="large" />
        <Icon name="twitter square" className="social-icon" size="large" />
        <Icon name="instagram" className="social-icon" size="large" />
        <Icon name="snapchat square" className="social-icon" size="large" />
        <Icon name="github square" className="social-icon" size="large" />
      </nav>
    </div>
  );
};

export default NavBar;