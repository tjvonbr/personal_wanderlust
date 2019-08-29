import React, { useState, useEffect } from "react";
import Trip from './Trip';
import axios from "axios";
import styled from "styled-components"

const HeaderTag = styled.h1`
  font-size: 1.8rem;
  color: white;
`;

const ParagraphInfo = styled.p`
  font-size: 1rem;
  color: white;
  line-height: 4px;
`;
const DescriptParagraph = styled.p`
  margin: 25px;
  color: white;
  font-size: 0.8rem;
  padding: 15px;
`;


const TripList = props => {

const [ tripState, setTripState ]= useState([]);
useEffect(() => {
  let fetch = () => {
    
    axios.get('https://wanderlust-be.herokuapp.com/api/trips')
    .then (res => {
      console.log(res.data)
      setTripState(res.data)

    })
    .catch(error =>{
      console.log("This is an error", error)
    })

  }
  
  fetch()

},[])

  return (

    <div className="tripList-wrapper">
       <div className="tripList-header">Find the trip of your dreams with Wanderlust!</div>
      <h2>TripList</h2>
      <div>{tripState && tripState.map(trip =>(
        <Trip trip={trip} key={trip.id } />
      ))}</div>
     <div>

    </div> 
  </div>

  );
};

export default TripList;
