import React from "react";
import styled from "styled-components";

const HorizontalRule = styled.hr`
  width: 275px;
  display: inline-block;
  margin-left: 10px;
`;
const ProfesionalSummaryHeader = styled.h3`
  margin-left: 10px;
  margin-bottom: 0;
  font-family: "Verdana";
`;

const ProfesionalSummary = styled.p`
  margin-top: 0;
  margin-left: 10px;
  margin-bottom: 30px;
`;
const ProfesionalSumSection = (props) => {
  return (
    <React.Fragment>
      <ProfesionalSummaryHeader>PROFESIONAL SUMMARY</ProfesionalSummaryHeader>
      <HorizontalRule />
      <ProfesionalSummary>{props.summary}</ProfesionalSummary>
    </React.Fragment>
  );
};

export default ProfesionalSumSection;
