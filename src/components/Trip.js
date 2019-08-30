<<<<<<< HEAD:src/components/Tours/Trip.js
import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
=======
import React from "react";
import styled from "styled-components";
import Image from "./images/tripimg.jpg";
>>>>>>> 182346fd4705087b520cbdfdffe8f8d794ee2a17:src/components/Trip.js

  const Trip = ({trip}) => {
    return(
    <Card 
      className="trip-card"
      style={cardStyle}
      centered={true}>
      <Card.Content>
        <Card.Header>{trip.title}</Card.Header>
        <Card.Meta>Start Date: {trip.startDate}</Card.Meta>
        <Card.Meta>End Date: {trip.endDate}</Card.Meta>
        <Card.Meta>Cost: ${trip.cost}</Card.Meta>
        <Card.Description>
          {trip.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='trip-btn-container'>
          <Button 
            floated="right"
            className="btn add-btn"
            icon="add"
            labelPosition="right"
            content="Add Trip"
            size="small"
            // onClick={() => props.fetchId(props.trip.id)}
            >

          </Button>
        </div>
      </Card.Content>
    </Card>
    )}

    const cardStyle = {
  width: '600px',
  height: '300px',
  margin: '20px auto',
  border: '1px solid gray',
  borderRadius: '3px',
  boxShadow: '2px 2px lightgray'
}

export default Trip;