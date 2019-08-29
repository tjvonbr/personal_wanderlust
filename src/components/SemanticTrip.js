import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, Image } from 'semantic-ui-react'

import { fetchId } from '../actions/userActions';

const SemanticTrip = props => {
  console.log('semantic trip', props)
  return (
    <Card 
      className="trip-card"
      style={cardStyle}>
      <Card.Content>
        <Image
          floated='right'
          size='small'
          src={props.trips[0].img}
        />
        <Card.Header>{props.trip.title}</Card.Header>
        <Card.Meta>Start Date: {props.trip.startDate}</Card.Meta>
        <Card.Meta>End Date: {props.trip.endDate}</Card.Meta>
        <Card.Meta>Location: {props.trip.location}</Card.Meta>
        <Card.Description>Description: {props.trip.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='trip-btn-container'>
          <Button
            floated="right"
            className="btn add-btn"
            icon="add"
            labelPosition="right"
            content="Add Trip"
            onClick={() => props.fetchId(props.trip.id)}>
          </Button>
        </div>
      </Card.Content>
    </Card>
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