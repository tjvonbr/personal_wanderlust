import React from "react";
import Navbar from './Navbar';
import ranier from '../images/ranier.jpg';

const Dashboard = props => {
  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <div className="dashboard-content">
        <img className="dashboard-photo" src={ranier} type="Scenic Photograph"/>
        <h3 className="app-motto">Wanderlust Motto</h3>
        <div className="mission-statement">This is Wanderlust's mission statement.</div>
      </div>
    </div>
  );
};

export default Dashboard;