import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";
import Input from "./Input/input";
import Label from "./Label/label";

const FormContainer = styled.div`
  width: 500px;
  height: fit-content;
  margin: 0 auto;
  margin-bottom: 10px;
  border: 2px solid black;
`;

const Form = styled.form`
  display: grid;
  width: 300px;
  margin: 0 auto;
`;

const FormHeader = styled.h3`
  text-align: center;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto 10px;
`;

const SchoolsContainer = styled.div`
  display: flex;
`;

const SchoolInformation = styled.p`
  margin: 10px auto 7px;
  text-align: center;
`;

const SchoolName = styled.span`
  font-weight: bold;
`;

class EducationForm extends Component {
  state = {
    schools: [
      {
        name: "High School",
        degree: "High School Diploma",
        graduationYear: "2008",
      },
    ],
    schoolName: "",
    degree: "",
    graduationDate: "",
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
      graduationYear: this.dateFormatter(this.state.graduationDate),
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
            <SchoolsContainer key={index}>
              <SchoolInformation>
                <SchoolName>{school.name}</SchoolName>
                <br></br> {school.degree}
                <br></br>
                {school.graduationYear}
              </SchoolInformation>
            </SchoolsContainer>
          );
        })}
        <Form>
          <Label text={"School:"} />
          <Input
            name="schoolName"
            required={true}
            onChange={this.inputHandler}
            type="text"
          ></Input>
          <Label text={"Degree:"} />
          <Input
            name="degree"
            required={true}
            onChange={this.inputHandler}
            type="text"
          ></Input>
          <Label text={"Graduation Date:"} />
          <Input
            name="graduationDate"
            required={true}
            onChange={this.inputHandler}
            type="date"
          ></Input>
        </Form>
        <Button onClick={this.addSchoolHandler}>Add Education</Button>
      </FormContainer>
    );
  }
}

export default EducationForm;
