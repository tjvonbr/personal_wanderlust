import React from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';

const UserProfile = props => {
  return (
    <div className="user-wrapper">
      <h1 className="user-welcome">Welcome back, {props.users[0].firstName}</h1>
      <UserCard users={props.users}/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(
  mapStateToProps
)(UserProfile);