import React, { Component } from "react";
import WorkExperienceForm from "./Forms/workExpForm.js";
import EducationForm from "./Forms/educationForm.js";
import PersonalInfoForm from "./Forms/personalInfoForm.js";

// Add a save button and cancel button when add education or add work is clicked, add their functionality
class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formNumber: props.number,
      education: 0,
      workExperience: 0,
    };
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <PersonalInfoForm />
        <EducationForm />

        <WorkExperienceForm />
        <button>Submit</button>
      </div>
    );
  }
}

export default Forms;
