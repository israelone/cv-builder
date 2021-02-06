import React, { Component } from "react";
import WorkExperienceForm from "./Forms/WorkExperience/workExpForm.js";
import EducationForm from "./Forms/Education/educationForm.js";
import PersonalInfoForm from "./Forms/PersonalInformation/personalInfoForm.js";
import styled from "styled-components";
import Resume from "./CV/resume";

//removeInformationHandler does not work at the moment

const Button = styled.button`
  display: block;
  margin: 0 auto 10px;
`;

const ApplicationHeader = styled.h2`
  text-align: center;
`;

class Forms extends Component {
  state = {
    name: "James Doe",
    occupation: "Janitor",
    address: "17362 my st",
    email: "none@gunit.com",
    number: "111111111",
    country: "anywhere",
    city: "yours",
    summary: "I have been cleaning restrooms for a while",
    education: [
      {
        schoolName: "Mary G. Montgomery High School",
        degree: "High School Diploma",
        graduationYear: "2008",
      },
    ],
    workExperience: [
      {
        companyName: "Izzy Dev",
        role: "Application Developer",
        dutiesList: ["develope", "submit ", "team "],
        city: "somewhere",
        date: "Jan 2021 - Jan 2023",
      },
    ],
    submitted: false,
  };

  addWorkExperience = (e) => {
    this.setState({
      workExperience: e,
    });
  };

  addEducation = (e) => {
    this.setState({
      education: e,
    });
  };

  submitionStatus = (e) => {
    e.preventDefault();
    this.setState({
      submitted: !this.state.submitted,
    });
  };

  personalInformationHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  checkForValidInputs = () => {
    for (const property in this.state) {
      if (property === "") {
      }
    }
  };

  removeInformationHandler = (index) => {
    console.log(index);
  };

  render() {
    return (
      <div>
        {this.state.submitted ? (
          <Resume information={this.state} />
        ) : (
          <div>
            <ApplicationHeader>CV Application</ApplicationHeader>
            <PersonalInfoForm
              name={this.state.name}
              occupation={this.state.occupation}
              address={this.state.address}
              email={this.state.email}
              number={this.state.number}
              country={this.state.country}
              city={this.state.city}
              summary={this.state.summary}
              personalInformationHandler={this.personalInformationHandler}
            />
            <EducationForm
              schools={this.state.education}
              addEducationHandler={this.addEducation}
              removeInformation={() => this.removeInformationHandler()}
            />
            <WorkExperienceForm
              workExperience={this.state.workExperience}
              addWork={this.addWorkExperience}
            />
          </div>
        )}{" "}
        <Button onClick={this.submitionStatus}>
          {this.state.submitted ? "Cancel" : "Submit"}
        </Button>
      </div>
    );
  }
}

export default Forms;
