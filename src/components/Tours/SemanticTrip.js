import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, Image } from 'semantic-ui-react'

const SemanticTrip = props => {
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
        <Card.Header>{props.trips[0].name}</Card.Header>
        <Card.Meta>{props.trips[0].street}</Card.Meta>
        <Card.Meta>{props.trips[0].rest}</Card.Meta>
        <Card.Description>{props.trips[0].description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='trip-btn-container'>
          <Button
            floated="right"
            className="btn add-btn"
            icon="add"
            labelPosition="right"
            content="Add Trip">
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
    trips: state.trips
  };
};

export default connect(
  mapStateToProps
)(SemanticTrip);