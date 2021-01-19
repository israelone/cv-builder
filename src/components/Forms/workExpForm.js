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

class workExperienceForm extends Component {
  state = {
    workExp: [],
    companyName: "",
    role: "",
    responsibilities: "",
    city: "",
    startDate: "",
    endDate: "",
  };

  companyNameInputHandler = (e) => {
    e.preventDefault();

    this.setState({ companyName: e.target.value });
  };

  roleInputHandler = (e) => {
    e.preventDefault();

    this.setState({ role: e.target.value });
  };

  responsibilitiesInputHandler = (e) => {
    e.preventDefault();

    this.setState({ responsibilities: e.target.value });
  };

  cityInputHandler = (e) => {
    e.preventDefault();

    this.setState({ city: e.target.value });
  };

  startDateInputHandler = (e) => {
    e.preventDefault();

    this.setState({ startDate: e.target.value });
  };

  endDateInputHandler = (e) => {
    e.preventDefault();
    this.setState({ endDate: e.target.value });
  };

  addWorkExperienceHandler = () => {
    let currentWorkExp = [...this.state.workExp];
    let newWorkExp = {
      companyName: this.state.companyName,
      role: this.state.role,
      responsibilities: this.state.responsibilities,
      city: this.state.city,
      date: this.state.startDate + " - " + this.state.endDate,
    };

    currentWorkExp.push(newWorkExp);
    this.setState({
      workExp: currentWorkExp,
    });
  };
  render() {
    return (
      <div>
        <h3>Work Experience</h3>
        {this.state.workExp.map((work, index) => {
          return (
            <div key={index}>
              <h3>{work.companyName}</h3>
              <h3>{work.role}</h3>
              <h3>{work.responsibilities}</h3>
              <h3>{work.city}</h3>
              <h3>{work.date}</h3>
            </div>
          );
        })}
        <Form>
          <Label>Company Name:</Label>
          <Input onChange={this.companyNameInputHandler} type="text"></Input>
          <Label>Role:</Label>
          <Input onChange={this.roleInputHandler} type="text"></Input>
          <Label>Responsibilities:</Label>
          <Input
            onChange={this.responsibilitiesInputHandler}
            type="text"
          ></Input>
          <Label>City:</Label>
          <Input onChange={this.cityInputHandler} type="text"></Input>
          <Label>From :</Label>
          <Input onChange={this.startDateInputHandler} type="date"></Input>
          <Label>To:</Label>
          <Input onChange={this.endDateInputHandler} type="date"></Input>
        </Form>
        <Button onClick={this.addWorkExperienceHandler}>Add Education</Button>
      </div>
    );
  }
}

export default workExperienceForm;
