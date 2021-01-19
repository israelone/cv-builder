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

class PersonalInfoForm extends Component {
  state = {
    name: "",
    occupation: "",
    number: "",
    email: "",
    country: "",
    city: "",
  };

  render() {
    return (
      <div>
        <h3>Personal Information</h3>
        <Form>
          <Label>Name:</Label>
          <Input type="text"></Input>
          <Label>Occupation:</Label>
          <Input type="text"></Input>
          <Label>Email:</Label>
          <Input type="email"></Input>
          <Label>Number:</Label>
          <Input type="number"></Input>
          <Label>Country:</Label>
          <Input type="text" t></Input>
          <Label>City:</Label>
          <Input type="text"></Input>
        </Form>
      </div>
    );
  }
}

export default PersonalInfoForm;
