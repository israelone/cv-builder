import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: grid;
  width: 300px;

  margin: 0 auto;
`;

const Label = styled.label`
  grid-column: 1;
`;

const Input = styled.input`
  grid-column: 2;
`;

const Button = styled.button`
  text-align: center;
  margin: 0 auto;
`;

class EducationForm extends Component {
  state = {
    schools: [{ name: "c", degree: "d", graduationYear: "33" }],
    school: "",
    degree: "",
    graduationDate: "",
  };

  schoolInputHandler = (e) => {
    e.preventDefault();

    this.setState({ school: e.target.value });
  };

  degreeInputHandler = (e) => {
    e.preventDefault();
    this.setState({ degree: e.target.value });
  };

  graduationDateInputHandler = (e) => {
    e.preventDefault();
    this.setState({ graduationDate: e.target.value });
  };

  addSchoolHandler = () => {
    let currentSchools = [...this.state.schools];

    let newSchool = {
      name: this.state.school,
      degree: this.state.degree,
      graduationYear: this.state.graduationDate,
    };
    currentSchools.push(newSchool);
    this.setState({
      schools: currentSchools,
    });
  };

  render() {
    return (
      <div>
        <h3>Education Information</h3>
        {this.state.schools.map((school, index) => {
          return (
            <div key={index}>
              <h3>{school.name}</h3>
              <h4>{school.degree}</h4>
              <h5>{school.graduationYear}</h5>
            </div>
          );
        })}
        <Form>
          <Label>School:</Label>
          <Input onChange={this.schoolInputHandler} type="text"></Input>
          <Label>Degree:</Label>
          <Input onChange={this.degreeInputHandler} type="text"></Input>
          <Label>Graduation Date:</Label>
          <Input onChange={this.graduationDateInputHandler} type="date"></Input>
        </Form>
        <Button onClick={this.addSchoolHandler}>Add Education</Button>
      </div>
    );
  }
}

export default EducationForm;
