import React from "react";
import TripList from './TripList';
import rainier from '../images/rainier.jpg';

import { Icon } from 'semantic-ui-react';

const Dashboard = props => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-content">
        <img className="dashboard-photo" src={rainier} alt="Scenic Photograph"/>
        <div className="icon-wrapper">
          <Icon className="travel-icon" name="travel" size="big" />
        </div>
        <h6 className="app-motto">Plan the trip of your dreams with the click of a button!</h6>
        <div className="mission-statement">Wanderlust is an application designed to make the vacation planning process less of a burden.  Everyone loves vacations and trips to unfamiliar destinations, but no one likes the planning process, and we don't blame you.  We have decided to handle that part for you so you can worry about enjoying your next trip!
        </div>
        <TripList />
      </div>
    </div>
  );
};

export default Dashboard;