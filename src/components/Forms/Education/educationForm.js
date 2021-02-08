import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";
import SchoolInformation from "./SchoolInformation/schoolInformation";

const FormContainer = styled.div`
  width: 500px;
  height: fit-content;
  margin: 0 auto;
  margin-bottom: 10px;
  border: 2px solid black;
`;

const InputContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  padding-left: 10px;
  margin: 10px 0;
`;

const Form = styled.form`
  display: grid;
  width: 300px;
  margin: 0 auto;
`;
const Input = styled.input`
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

const Button = styled.button`
  display: block;
  margin: 0 auto 10px;
`;

class EducationForm extends Component {
  state = {
    schools: this.props.schools,
    schoolName: "",
    degree: "",
    graduationYear: "",
  };

  dateFormatter = (date) => {
    return moment(date.replace(/\D/g, ""), "YYYYMMDD").format("MMM YYYY");
  };

  inputHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addSchoolHandler = () => {
    let currentSchools = [...this.state.schools];
    let newSchool = {
      schoolName: this.state.schoolName,
      degree: this.state.degree,
      graduationYear: this.dateFormatter(this.state.graduationYear),
    };
    currentSchools.push(newSchool);
    this.setState(
      {
        schools: currentSchools,
      },
      this.addHandler
    );
  };

  addHandler = () => {
    this.props.addEducationHandler(this.state.schools);
  };

  render() {
    return (
      <FormContainer>
        <FormHeader>Education Information</FormHeader>
        {this.state.schools.map((school, index) => {
          return (
            <React.Fragment>
              <SchoolInformation
                key={index}
                schoolName={school.schoolName}
                graduationYear={school.graduationYear}
                degree={school.degree}
                removeInformation={() => this.props.removeInformation}
                index={index}
              />
            </React.Fragment>
          );
        })}
        <Form>
          <InputContainer>
            <Label>School Name:</Label>
            <Input
              name="schoolName"
              required={true}
              onChange={this.inputHandler}
              type="text"
            ></Input>
          </InputContainer>
          <InputContainer>
            <Label>Degree:</Label>
            <Input
              name="degree"
              required={true}
              onChange={this.inputHandler}
              type="text"
            ></Input>
          </InputContainer>
          <InputContainer>
            <Label>Graduation Year:</Label>
            <Input
              name="graduationYear"
              required={true}
              onChange={this.inputHandler}
              type="number"
              min="1950"
              max="2050"
            ></Input>
          </InputContainer>
        </Form>
        <Button onClick={this.addSchoolHandler}>Add Education</Button>
      </FormContainer>
    );
  }
}

export default EducationForm;
