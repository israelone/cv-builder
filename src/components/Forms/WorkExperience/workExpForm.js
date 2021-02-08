import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";
import WorkInformation from "./WorkInformation/WorkInformation";
import Duty from "./WorkInformation/duty";
const FormContainer = styled.div`
  width: 500px;
  height: fit-content;
  margin: 0 auto;
  border: 2px solid black;
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  &.dutiesContainer {
    display: grid;
    grid-template-columns: 8fr 1fr;
    grid-template-rows: auto;
  }
  background-color: white;
  border-radius: 5px;
  padding-left: 10px;
  margin: 10px 0;
`;
const Input = styled.input`
  &.dutiesInput {
    grid-row: 2;
  }
  &:focus {
    outline: none;
  }
  border: none;
  border-bottom: 1px solid black;
  width: 98%;
  font-size: 20px;
  padding: 0;
`;

const Label = styled.label`
  font-size: 14px;
  margin: 5px 0px;
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

const Icon = styled.i`
  cursor: pointer;
  grid-row: 2;
  grid-column: 2;
  align-self: center;
  justify-self: center;
`;
const DutiesList = styled.ul`
  display: ${(props) => (props.show ? "none" : "grid")};
  grid-template-columns: 8fr 1fr;
  grid-row: 3;
`;

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
    return moment(date.replace(/\D/g, ""), "YYYYMMDD").format("MMM YYYY");
  };

  inputHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // Add work experience to this.state.workExp using this.state values
  addWorkExperienceHandler = () => {
    let currentWorkExp = [...this.state.workExp];
    let newWorkExp = {
      companyName: this.state.companyName,
      role: this.state.role,
      dutiesList: this.state.dutiesList,
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
        companyName: "",
        role: "",
        duties: "",
        city: "",
        startDate: "",
        endDate: "",
        dutiesList: [],
      },
      this.addHandler
    );
  };

  //Adds work experience to forms.js state
  addHandler = () => {
    this.props.addWork(this.state.workExp);
  };

  //Adds duty to dutiesList and clear duties input value
  addDuty = (e) => {
    this.setState((state) => {
      const dutiesList = state.dutiesList.concat(state.duties);
      return {
        dutiesList,
        duties: "",
      };
    });
    e.target.previousElementSibling.value = "";
  };

  deleteDutyHandler = (index) => {
    let currentDuties = [...this.state.dutiesList];
    currentDuties.splice(index, 1);
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
          <InputContainer>
            <Label>Company Name:</Label>
            <Input
              name="companyName"
              required={true}
              onChange={this.inputHandler}
              type="text"
            ></Input>
          </InputContainer>
          <InputContainer>
            <Label>Role:</Label>
            <Input
              name="role"
              required={true}
              onChange={this.inputHandler}
              type="text"
            ></Input>
          </InputContainer>
          <InputContainer className="dutiesContainer">
            <Label>Duties:</Label>
            <Input
              className="dutiesInput"
              name="duties"
              required={true}
              onChange={this.inputHandler}
              type="text"
            ></Input>
            <Icon className={"fas fa-plus-circle"} onClick={this.addDuty} />
            <DutiesList
              show={this.state.dutiesList.length === 0 ? true : false}
            >
              {this.state.dutiesList.map((duty, index) => {
                return (
                  <Duty
                    deleteDuty={() => this.deleteDutyHandler()}
                    text={duty}
                    ley={index}
                    index={index}
                  />
                );
              })}
            </DutiesList>
          </InputContainer>
          <InputContainer>
            <Label>City:</Label>
            <Input
              name="city"
              required={true}
              onChange={this.inputHandler}
              type="text"
            ></Input>
          </InputContainer>
          <InputContainer>
            <Label>From:</Label>
            <Input
              name="startDate"
              required={true}
              onChange={this.inputHandler}
              type="date"
            ></Input>
          </InputContainer>
          <InputContainer>
            <Label>To:</Label>
            <Input
              name="endDate"
              required={true}
              onChange={this.inputHandler}
              type="date"
            ></Input>
          </InputContainer>
        </Form>
        <Button onClick={this.addWorkExperienceHandler}>
          Add Work Experience
        </Button>
      </FormContainer>
    );
  }
}

export default workExperienceForm;
