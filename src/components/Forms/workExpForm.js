import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";
import Input from "./Input/input";
import Label from "./Label/label";

const FormContainer = styled.div`
  width: 500px;
  height: fit-content;
  margin: 0 auto;
  border: 2px solid black;
  margin-bottom: 10px;
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

const WorkExperienceContainer = styled.div`
  display: flex;
`;
const WorkExperienceDescription = styled.p`
  margin: 10px auto 7px;
`;

const CompanyName = styled.span``;

class workExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workExp: [
        {
          companyName: "The Machine Maker",
          role: "Machinist",
          responsibilities: ["develope ", "submit ", "team "],
          city: "somewhere",
          date: "Jan 2021 - Jan 2023",
        },
      ],
      companyName: "",
      role: "",
      responsibilities: "",
      city: "",
      startDate: "",
      endDate: "",
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
      responsibilities: this.state.responsibilities,
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

  render() {
    return (
      <FormContainer>
        <FormHeader>Work Experience</FormHeader>
        {this.state.workExp.map((work, index) => {
          return (
            <WorkExperienceContainer key={index}>
              <WorkExperienceDescription>
                {work.companyName}
                <br></br>
                {work.role}
                <br></br> {work.responsibilities}
                <br></br>
                {work.city} <br></br>
                {work.date}
              </WorkExperienceDescription>
            </WorkExperienceContainer>
          );
        })}
        <Form>
          <Label text={"Company Name:"} />
          <Input
            name="companyName"
            required={true}
            onChange={this.inputHandler}
            type="text"
          ></Input>
          <Label text={"Role:"} />
          <Input
            name="role"
            required={true}
            onChange={this.inputHandler}
            type="text"
          ></Input>
          <Label text={"Responsibilities:"} />
          <Input
            name="responsibilities"
            required={true}
            onChange={this.inputHandler}
            type="text"
          ></Input>
          <Label text={"City:"} />
          <Input
            name="city"
            required={true}
            onChange={this.inputHandler}
            type="text"
          ></Input>
          <Label text={"From:"} />
          <Input
            name="startDate"
            required={true}
            onChange={this.inputHandler}
            type="date"
          ></Input>
          <Label text={"To:"} />
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
