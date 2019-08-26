import React from "react";
import { Icon } from 'semantic-ui-react';


const NavBar = props => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item" id="app-title">Wanderlust</li>
          <li className="navbar-item">Home</li>
          <li className="navbar-item">About Us</li>
          <li className="navbar-item">Trips</li>
          <li className="navbar-item">Contact Us</li>
          <Icon name="facebook" className="social-icon" size="large" />
          <Icon name="twitter square" className="social-icon" size="large" />
          <Icon name="instagram" className="social-icon" size="large" />
          <Icon name="snapchat square" className="social-icon" size="large" />
          <Icon name="github square" className="social-icon" size="large" />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;