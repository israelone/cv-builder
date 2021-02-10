import React, { Component } from "react";
import styled from "styled-components";
import IntroSection from "./IntroSection/intro";
import ProfesionalSumSection from "./ProfesionalSummary/profesionalSummary";
import EducationSection from "./EducationSection/education";
import WorkSection from "./WorkSection/workSection";

const ResumeContainer = styled.div`
  width: 75%;
  margin: 10px auto;
  border: 2px solid black;
`;

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.information);
  }

  render() {
    return (
      <ResumeContainer>
        <IntroSection
          name={this.props.information.name}
          address={this.props.information.address}
          city={this.props.information.city}
          country={this.props.information.country}
          number={this.props.information.number}
          email={this.props.information.email}
        />
        <ProfesionalSumSection summary={this.props.information.summary} />
        <WorkSection workHistory={this.props.information.workExperience} />
        <EducationSection educationHistory={this.props.information.education} />
      </ResumeContainer>
    );
  }
}

export default Resume;
