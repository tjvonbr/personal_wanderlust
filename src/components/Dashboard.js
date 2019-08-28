import React from "react";
import Navbar from './Navbar';
import TripList from './Tours/TripList';
import rainier from '../images/rainier.jpg';

import { Icon } from 'semantic-ui-react';

const Dashboard = props => {
  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <div className="dashboard-content">
        <img className="dashboard-photo" src={rainier} type="Scenic Photograph"/>
        <div className="icon-wrapper">
          <Icon className="travel-icon" name="travel" size="big" />
        </div>
        <h6 className="app-motto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laboriosam cum modi laborum maxime nobis commodi minima dolorum officia aspernatur, iste cumque odio aliquid sint quibusdam mollitia dignissimos maiores? Unde!</h6>
        <div className="mission-statement">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A expedita culpa adipisci ad optio voluptatem quisquam itaque est corporis error officia unde animi, laboriosam et architecto quia natus aut corrupti?
        </div>
        <TripList />
      </div>
    </div>
  );
};

export default Dashboard;