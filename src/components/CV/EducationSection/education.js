import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 20px;
`;

const EducationHistory = styled.h3`
  margin: 0;
  margin-left: 10px;
`;

const HorizontalRule = styled.hr`
  width: 275px;
  display: inline-block;
  margin-left: 10px;
`;

const SchoolName = styled.h3`
  margin: 0;
  margin-left: 10px;
  font-weight: normal;
`;
const Degree = styled.h4`
  margin: 0;
  margin-left: 10px;
  font-style: italic;
  font-weight: normal;
`;
const GraduationYear = styled.h4`
  color: #b9b9bf;
  margin: 0;
  margin-left: 10px;
  font-style: italic;
`;

const EducationSection = (props) => {
  return (
    <Container>
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
    </Container>
  );
};

export default EducationSection;
