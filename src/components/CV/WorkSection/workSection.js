import React from "react";
import styled from "styled-components";

const WorkHistoryHeaders = styled.h2`
  margin-left: 10px;
`;

const WorkInformation = styled(WorkHistoryHeaders)`
  font-style: italic;
`;

const DateWorked = styled(WorkHistoryHeaders)`
  color: #b9b9bf;
`;

const WorkHistory = styled.h3`
  margin-left: 10px;
`;

const HorizontalRule = styled.hr`
  width: 35%;
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
