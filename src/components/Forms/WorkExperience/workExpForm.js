import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";
import WorkInformation from "./WorkInformation/WorkInformation";

const FormContainer = styled.div`
  width: 500px;
  height: fit-content;
  margin: 0 auto;
  border: 2px solid black;
  margin-bottom: 10px;
`;

const Input = styled.input`
  grid-column: 2;
`;

const Label = styled.label`
  grid-column: 1;
`;

const FormHeader = styled.h3`
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  width: 300px;

  margin: 0 auto;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto 10px;
`;

const Icon = styled.i``;

class workExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workExp: this.props.workExperience,
      companyName: "",
      role: "",
      duties: "",
      city: "",
      startDate: "",
      endDate: "",
      dutiesList: [],
    };
  }

  dateFormatter = (date) => {
    console.log(date);
    return moment(date.replace(/\D/g, ""), "YYYYMMDD").format("MMM YYYY");
  };

  inputHandler = (e) => {
    console.log(e);
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addWorkExperienceHandler = () => {
    let currentWorkExp = [...this.state.workExp];
    let newWorkExp = {
      companyName: this.state.companyName,
      role: this.state.role,
      duties: this.state.duties,
      city: this.state.city,
      date:
        this.dateFormatter(this.state.startDate) +
        " - " +
        this.dateFormatter(this.state.endDate),
    };
    currentWorkExp.push(newWorkExp);
    this.setState(
      {
        workExp: currentWorkExp,
      },
      this.addHandler
    );
  };

  addHandler = () => {
    this.props.addWork(this.state.workExp);
  };

  addDuty = () => {
    let currentDuties = this.state.dutiesList;
    currentDuties = currentDuties.concat(this.state.duties);
    this.setState({
      dutiesList: currentDuties,
    });
  };

  render() {
    return (
      <FormContainer>
        <FormHeader>Work Experience</FormHeader>
        {this.state.workExp.map((work, index) => {
          return (
            <WorkInformation
              key={index}
              companyName={work.companyName}
              role={work.role}
              dutiesList={work.dutiesList}
              city={work.city}
              date={work.date}
            />
          );
        })}
        <Form>
          <Label>Company Name:</Label>
          <Input
            name="companyName"
            required={true}
            onChange={this.inputHandler}
            type="text"
          ></Input>
          <Label>Role:</Label>
          <Input
            name="role"
            required={true}
            onChange={this.inputHandler}
            type="text"
          ></Input>
          <Label>Duties:</Label>
          <Input
            name="duties"
            required={true}
            onChange={this.inputHandler}
            type="text"
          ></Input>
          <Icon className={"fas fa-plus-circle"} onClick={() => this.addDuty} />
          <Label>City:</Label>
          <Input
            name="city"
            required={true}
            onChange={this.inputHandler}
            type="text"
          ></Input>
          <Label>From:</Label>
          <Input
            name="startDate"
            required={true}
            onChange={this.inputHandler}
            type="date"
          ></Input>
          <Label>To:</Label>
          <Input
            name="endDate"
            required={true}
            onChange={this.inputHandler}
            type="date"
          ></Input>
        </Form>
        <Button onClick={this.addWorkExperienceHandler}>
          Add Work Experience
        </Button>
      </FormContainer>
    );
  }
}

export default workExperienceForm;
