import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, Image } from 'semantic-ui-react'

import { fetchId } from '../actions/userActions';

const SemanticTrip = ({trip, fetchId}) => {
  return (
    <Card.Group
      itemsPerRow="two">  
      <Card 
        className="trip-card"
        style={cardStyle}>
    
        <Card.Content>
          <Card.Header>{trip.title}</Card.Header>
          <Card.Meta>Start Date: {trip.startDate}</Card.Meta>
          <Card.Meta>End Date: {trip.endDate}</Card.Meta>
          <Card.Meta>Location: {trip.location}</Card.Meta>
          <Card.Description>Description: {trip.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='trip-btn-container'>
            <Button
              floated="right"
              className="btn add-btn"
              icon="add"
              labelPosition="right"
              content="Add Trip"
              onClick={() => fetchId(trip.id)}>
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

const cardStyle = {
  width: '600px',
  height: '300px',
  margin: '20px auto',
  border: '1px solid gray',
  borderRadius: '3px',
  boxShadow: '2px 2px lightgray'
}

const mapStateToProps = state => {
  return {
    trips: state.tripsReducer.trips
  };
};

export default connect(
  mapStateToProps,
  {fetchId}
)(SemanticTrip);