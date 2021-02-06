import React from "react";
import styled from "styled-components";

const HorizontalRule = styled.hr`
  width: 35%;
  display: inline-block;
  margin-left: 10px;
`;

const NameHeader = styled.h1`
  margin-left: 10px;
  margin-bottom: 0;
`;

const Personal = styled.p`
  margin: 0 0 0 10px;
`;

const IntroSection = (props) => {
  return (
    <React.Fragment>
      <NameHeader>{props.name}</NameHeader>
      <HorizontalRule />
      <Personal>
        {`${props.address}, ${props.city}, ${props.country}. | (C)${props.number} ${props.email}`}
      </Personal>
    </React.Fragment>
  );
};

export default IntroSection;
