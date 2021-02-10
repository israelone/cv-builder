import React from "react";
import styled from "styled-components";

const EducationHistory = styled.h3`
  margin-left: 10px;
`;

const HorizontalRule = styled.hr`
  width: 35%;
  display: inline-block;
  margin-left: 10px;
`;

const SchoolName = styled.h3`
  margin: 0;
  margin-left: 10px;
  font-style: italic;
`;
const Degree = styled.h4`
  margin: 0;
  margin-left: 10px;
  font-style: italic;
`;
const GraduationYear = styled.h4`
  margin: 0;
  margin-left: 10px;
  font-style: italic;
`;

const EducationSection = (props) => {
  return (
    <React.Fragment>
      <EducationHistory>EDUCATION</EducationHistory>
      <HorizontalRule />
      {props.educationHistory.map((school) => {
        return (
          <div>
            <GraduationYear>{school.graduationYear}</GraduationYear>
            <Degree>{school.degree}</Degree>
            <SchoolName>{school.schoolName}</SchoolName>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default EducationSection;
