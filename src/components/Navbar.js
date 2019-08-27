import React from "react";
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const NavBar = props => {
  return (
    <div className="navbar-wrapper">
      <div id="app-title">Wanderlust</div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">About Us</li>
          <Link to="/trips">
            <li className="navbar-item">Trips</li>
          </Link>
          <li className="navbar-item">Contact Us</li>
        </ul>
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