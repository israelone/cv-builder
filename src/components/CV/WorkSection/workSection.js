import React from "react";
import styled from "styled-components";

const WorkHistoryHeaders = styled.h2`
  margin: 0;
  margin-left: 10px;
`;

const WorkInformation = styled(WorkHistoryHeaders)`
  font-size: 18px;
  font-style: italic;
  font-weight: normal;
`;

const DateWorked = styled(WorkHistoryHeaders)`
  font-size: 14px;
  color: #b9b9bf;
  text-transform: uppercase;
`;

const WorkHistory = styled.h3`
  margin: 0;
  margin-left: 10px;
`;

const HorizontalRule = styled.hr`
  width: 275px;
  display: inline-block;
  margin-left: 10px;
`;

const WorkSection = (props) => {
  console.log(props.workHistory);
  return (
    <React.Fragment>
      <WorkHistory>WORK HISTORY</WorkHistory>
      <HorizontalRule />
      {props.workHistory.map((work, index) => {
        return (
          <div>
            <DateWorked>{work.date}</DateWorked>
            <WorkInformation>{`${work.role} | ${work.companyName} | ${work.city}`}</WorkInformation>
            <ul>
              {work.dutiesList.map((responsibility, index) => {
                return <li key={index}>{responsibility}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default WorkSection;
