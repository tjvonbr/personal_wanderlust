import React from "react";
import tripImg from "../images/tripimg.jpg";
import Styled from "styled-components";
import { Button, Card, Image } from "semantic-ui-react";
import {connect} from 'react-redux'
import {fetchId} from '../actions/userActions.js'

const Img = Styled.img`
width: 30%;
heigth: auto;
padding: 10px
`


const Trip = ({ trip, fetchId }) => {
  return (
    <Card className="trip-card" style={cardStyle} centered={true}>
      <Img src={tripImg}/>
        <div >
          <Card.Content>
            <Card.Header>{trip.title}</Card.Header>
            <Card.Meta>Start Date: {trip.startDate}</Card.Meta>
            <Card.Meta>End Date: {trip.endDate}</Card.Meta>
            <Card.Meta>Cost: ${trip.cost}</Card.Meta>
            <Card.Description>{trip.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="trip-btn-container">
              <Button
                floated="right"
                className="btn add-btn"
                icon="add"
                labelPosition="right"
                content="Add Trip"
                size="small"
                onClick={() => fetchId(trip.id)}
              ></Button>
            </div>
          </Card.Content>
        </div>
      </Card>
  );
};

const cardStyle = {
  width: "600px",
  height: "300px",
  margin: "20px auto",
  border: "1px solid gray",
  borderRadius: "3px",
  boxShadow: "2px 2px lightgray",
  display: "flex",
  flexDirection: "row"
};



export default connect(() => {}, {fetchId})(Trip);
