import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";
import SchoolInformation from "./SchoolInformation/schoolInformation";

const FormContainer = styled.div`
  width: 500px;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  margin: 0 auto;
  /* border: 2px solid black; */
  margin-bottom: 10px;
  background-color: #2c698d;
  padding: 10px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 7px 1px #000000;
  box-shadow: 0px 0px 7px 1px #000000;
`;

const InputContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  padding-left: 10px;
  margin: 10px 0;
  display: grid;
`;

const Form = styled.form`
  display: grid;
  width: 80%;
  margin: 0 auto;
`;

const Input = styled.input`
  &:focus {
    outline: none;
  }
  border: none;
  border-bottom: 1px solid black;
  width: 95%;
  font-size: 20px;
  padding: 0;
  padding-left: 5px;
`;

const Label = styled.label`
  font-size: 14px;
  margin: 5px 0px;
  font-family: Roboto;
`;

const FormHeader = styled.h3`
  text-align: center;
  font-family: Cabin;
  letter-spacing: 5px;
  color: #fff;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto 10px;
`;

class EducationForm extends Component {
  state = {
    education: this.props.education,
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
    let currentSchools = [...this.state.education];
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
    this.props.addEducationHandler(this.state.education);
  };

  removeInformationHandler = (index) => {
    let currentInformation = [...this.state.education];
    currentInformation.splice(index, 1);
    this.setState({
      education: currentInformation,
    });
    this.props.removeInformation(index);
  };

  render() {
    return (
      <FormContainer>
        <FormHeader>Education Information</FormHeader>
        {this.state.education.map((school, index) => {
          return (
            <React.Fragment>
              <SchoolInformation
                key={index}
                schoolName={school.schoolName}
                graduationYear={school.graduationYear}
                degree={school.degree}
                removeInformation={() => this.removeInformationHandler()}
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
