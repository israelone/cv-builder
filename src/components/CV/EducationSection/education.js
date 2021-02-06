import React from "react";
import styled from "styled-components";

const EducationHistory = styled.h3`
  margin-left: 10px;
`;

const EducationSection = () => {
  return (
    <React.Fragment>
      <EducationHistory>EDUCATION</EducationHistory>
      {/* {this.props.information.workExperience.map((school) => {
          return (
            <div>
              <DateWorked>{work.date}</DateWorked>
              <WorkInformation>{`${work.role} | ${work.companyName} | ${work.city}`}</WorkInformation>

              <ul>
                {work.responsibilities.map((responsibility, index) => {
                  return <li key={index}>{responsibility}</li>;
                })}
              </ul>
            </div>
          );
        })} */}
    </React.Fragment>
  );
};

export default EducationSection;
