import React, { Component } from "react";
import styled from "styled-components";

const ResumeContainer = styled.div`
  width: 75%;
  margin: 10px auto;
  border: 2px solid black;
`;

const HorizontalRule = styled.hr`
  width: 35%;
  display: inline-block;
  margin-left: 10px;
`;

const NameHeader = styled.h1`
  margin-left: 10px;
  margin-bottom: 0;
`;

const SectionHeaders = styled.h3`
  margin-left: 10px;
`;

const WorkHistoryHeaders = styled.h2`
  margin-left: 10px;
`;

const PersonalInformation = styled.p`
  margin: 0 0 0 10px;
`;

const ProfesionalSummaryHeader = styled(SectionHeaders)`
  margin-left: 10px;
  margin-bottom: 0;
`;

const ProfesionalSummary = styled.p`
  margin-top: 0;
  margin-left: 10px;
  margin-bottom: 30px;
`;

const WorkInformation = styled(WorkHistoryHeaders)`
  font-style: italic;
`;

const DateWorked = styled(WorkHistoryHeaders)`
  color: #b9b9bf;
`;

const WorkHistory = styled(SectionHeaders)``;

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.information);
  }

  render() {
    return (
      <ResumeContainer>
        <NameHeader>{this.props.information.name}</NameHeader>
        <HorizontalRule />
        <PersonalInformation>
          {`${this.props.information.address}, ${this.props.information.city}, ${this.props.information.country}. | (C)${this.props.information.number} ${this.props.information.email}`}
        </PersonalInformation>

        <ProfesionalSummaryHeader>PROFESIONAL SUMMARY</ProfesionalSummaryHeader>
        <HorizontalRule />
        <ProfesionalSummary>
          {this.props.information.summary}
        </ProfesionalSummary>
        <WorkHistory>WORK HISTORY</WorkHistory>
        {this.props.information.workExperience.map((work) => {
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
        })}
      </ResumeContainer>
    );
  }
}

export default Resume;
