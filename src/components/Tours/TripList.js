import React from 'react';
import SemanticTrip from './SemanticTrip';

const TripList = props => {
  return (
    <div className="tripList-wrapper">
      <div className="tripList-header">Find the trip of your dreams with Wanderlust!</div>
      <h6 className="list-explanation">Below is list of trips and adventures that our staff has carefully curated for individuals like you--individuals that are passionate about travelling and curious about other parts of the world.  We hope you enjoy the trips that we have chosen for you!  For each trip, you'll notice an "Add Trip" button in the bottom, right-hand corner.  You'll want to click that button if a particular trip catches your eye.  Think of it as bookmarking the trip.  You can then access that trip on your profile page.</h6>
      <p className="signature">Sincerely, the Wanderlust staff</p>
      <SemanticTrip />
    </div>
  );
};

export default TripList;
