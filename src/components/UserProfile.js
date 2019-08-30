import React from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';
import SemanticTrip from './SemanticTrip';

const UserProfile = props => {
  return (
    <div className="user-wrapper">
      <h1 className="user-welcome">Welcome back, Trevor</h1>
      <UserCard users={props.users}/>

      <div className="user-trip-wrapper">
        <h3 className="user-trip-list">Trips You're Interested In:</h3>
      </div>
      {props.savedTrips.map(savedTrip => (
          <SemanticTrip trip={savedTrip} key={savedTrip.id} />
        ))}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    users: state.userReducer.users,
    savedTrips: state.tripsReducer.savedTrips
  };
};

export default connect(
  mapStateToProps
)(UserProfile);