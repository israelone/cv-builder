import React from "react";
import styled from "styled-components";

const HorizontalRule = styled.hr`
  width: 275px;
  display: inline-block;
  margin-left: 10px;
`;

const NameHeader = styled.h1`
  margin-left: 10px;
  margin-bottom: 0;
  font-family: "Roboto";
`;

const Personal = styled.p`
  margin: 13px 0 35px 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
`;

const IntroSection = (props) => {
  return (
    <React.Fragment>
      <NameHeader>{props.name}</NameHeader>
      <HorizontalRule />
      <Personal>
        {`${props.address}, ${props.city}, ${props.country}. | (C) ${props.number} ${props.email}`}
      </Personal>
    </React.Fragment>
  );
};

export default IntroSection;
