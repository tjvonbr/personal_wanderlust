import React, { useState } from "react";
import styled from "styled-components";
import Image from "./tripimg.jpg";
import axios from "axios";


const MainDiv = styled.div`
  display: flex;
  background: #eff1ed;
  width: 60%;
  align-content: center;
`;

const ImgDiv = styled.img`
  width: 200px;
  height: auto;
  margin: 25px;
  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.5);
`;
const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
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

const Button = styled.button`
  border-radius: 20px;
  padding: 16px 22px;
  margin: 10px;
  width: 27%;
  align-item: center;
  border: none;
  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.3);
`;


const Trip = props => {
const { tripState, setTripState }= useState({
  id: "",
  title: "",
  description: "",
  organizerId: "",
  location: "",
  cost:"",
  isFree:"",
  startDate:"",
  endDate:"",
});

axios.get("https://wanderlust-be.herokuapp.com/api/trips")
.then (res => {
  console.log("check here", res)
})
  return (
    <MainDiv>
      <ImgDiv src={Image} alt="image of trip" />
      <Section>
        <div>
          <HeaderTag>Bearskin Lodge on the Gunflint Trail</HeaderTag>
          <ParagraphInfo>Address 1</ParagraphInfo>
          <ParagraphInfo>Address 2</ParagraphInfo>
          <ParagraphInfo>Contact #</ParagraphInfo>
          <DescriptParagraph>Place holder paragraph</DescriptParagraph>
        </div>
        <Button>View Website</Button>
        <Button>Send Email</Button>
        <Button>Book Now</Button>
      </Section>
    </MainDiv>
  );
};

export default Trip;
