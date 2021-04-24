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

const Next = styled(Button)``;

const Back = styled(Button)`
  @media print {
    display: none;
  }
`;

const Print = styled(Button)`
  @media print {
    display: none;
  }
`;

const ApplicationHeader = styled.h2`
  text-align: center;
  letter-spacing: 7px;
  font-family: Roboto;
  color: #2c698d;
  @media print {
    display: none;
  }
`;

const FormsContainer = styled.div`
  display: grid;
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
    currentForm: 1,
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

  submitionStatus = () => {
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

  removeSchoolInformationHandler = (index) => {
    let currentInformation = [...this.state.education];
    currentInformation.splice(index, 1);
    this.setState({
      education: currentInformation,
    });
  };

  removeWorkInformationHandler = (index) => {
    let currentInformation = [...this.state.workExperience];
    currentInformation.splice(index, 1);
    this.setState({
      workExperience: currentInformation,
    });
  };

  updateCurrentForm = (e) => {
    e.preventDefault();
    if (e.target.innerText === "Next") {
      this.setState({
        currentForm: this.state.currentForm + 1,
      });
    } else if (
      e.target.innerText === "Back" ||
      e.target.innerText === "Cancel"
    ) {
      this.setState({
        currentForm: this.state.currentForm - 1,
      });
    } else if (e.target.innerText === "Submit") {
      this.setState({
        currentForm: this.state.currentForm + 1,
      });
      this.submitionStatus();
    }
  };

  printResume = () => {
    window.print();
  };

  render() {
    return (
      <FormsContainer>
        <React.Fragment>
          <ApplicationHeader>CV Application</ApplicationHeader>
          {this.state.currentForm === 1 ? (
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
          ) : this.state.currentForm === 2 ? (
            <EducationForm
              education={this.state.education}
              addEducation={this.addEducation}
              removeInformation={() => this.removeSchoolInformationHandler()}
            />
          ) : this.state.currentForm === 3 ? (
            <WorkExperienceForm
              workExperience={this.state.workExperience}
              addWork={this.addWorkExperience}
              removeInformation={() => this.removeWorkInformationHandler()}
            />
          ) : (
            <Resume information={this.state} />
          )}
        </React.Fragment>
        {this.state.currentForm === 1 ? (
          <Next onClick={this.updateCurrentForm}>Next</Next>
        ) : this.state.currentForm === 2 ? (
          <React.Fragment>
            <Back onClick={this.updateCurrentForm}>Back</Back>
            <Next onClick={this.updateCurrentForm}>Next</Next>
          </React.Fragment>
        ) : this.state.currentForm === 3 ? (
          <React.Fragment>
            <Back onClick={this.updateCurrentForm}>Back</Back>
            <Next onClick={this.updateCurrentForm}>Next</Next>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Back onClick={this.updateCurrentForm}>Back</Back>
            <Print onClick={this.printResume}>Print</Print>
          </React.Fragment>
        )}
      </FormsContainer>
    );
  }
}

export default Forms;
