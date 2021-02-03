import React, { Component } from "react";
import WorkExperienceForm from "./Forms/workExpForm.js";
import EducationForm from "./Forms/educationForm.js";
import PersonalInfoForm from "./Forms/personalInfoForm.js";
import styled from "styled-components";
import Resume from "./resume";
//Adding work and school experience, seems to be working.
//I need to add a way to delete not wanted things
//Personal Information should be added as well,
//Lastly create a view where a user can see their CV done.

const Button = styled.button`
  display: block;
  margin: 0 auto 10px;
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
        name: "Mary G. Montgomery High School",
        degree: "High School Diploma",
        graduationYear: "2008",
      },
    ],
    workExperience: [
      {
        companyName: "Izzy Dev",
        role: "Application Developer",
        responsibilities: ["develope ", "submit ", "team "],
        city: "somewhere",
        date: "jan 2021 - jan 2023",
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

  render() {
    return (
      <div>
        {this.state.submitted ? (
          <Resume information={this.state} />
        ) : (
          <div>
            <PersonalInfoForm
              personalInformationHandler={this.personalInformationHandler}
            />
            <EducationForm addEducationHandler={this.addEducation} />
            <WorkExperienceForm addWork={this.addWorkExperience} />
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
