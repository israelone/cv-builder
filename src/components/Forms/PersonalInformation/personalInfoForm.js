import React from "react";
import styled from "styled-components";

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

const TextArea = styled.textarea`
  margin-bottom: 10px;
`;

const PersonalInfoForm = (props) => {
  return (
    <FormContainer>
      <FormHeader>Personal Information</FormHeader>
      <Form>
        <Label>Name:</Label>
        <Input
          onChange={props.personalInformationHandler}
          required={true}
          type="text"
          name="name"
          placeHolder={"Your name"}
          value={props.name}
        ></Input>
        <Label>Occupation:</Label>
        <Input
          onChange={props.personalInformationHandler}
          required={true}
          type="text"
          name="occupation"
          value={props.occupation}
        ></Input>
        <Label>Address:</Label>
        <Input
          onChange={props.personalInformationHandler}
          required={true}
          type="text"
          name="address"
          value={props.address}
        ></Input>
        <Label>City:</Label>
        <Input
          onChange={props.personalInformationHandler}
          required={true}
          type="text"
          name="city"
          value={props.city}
        ></Input>
        <Label>Country:</Label>
        <Input
          onChange={props.personalInformationHandler}
          required={true}
          type="text"
          name="country"
          value={props.country}
        ></Input>
        <Label>Email:</Label>
        <Input
          onChange={props.personalInformationHandler}
          required={true}
          type="email"
          name="email"
          value={props.email}
        ></Input>
        <Label>Phone Number:</Label>
        <Input
          onChange={props.personalInformationHandler}
          required={true}
          type="tel"
          name="number"
          value={props.number}
        ></Input>
        <Label>Summary:</Label>
        <TextArea
          onChange={props.personalInformationHandler}
          required={true}
          type="textarea"
          name="summary"
          value={props.summary}
        ></TextArea>
      </Form>
    </FormContainer>
  );
};

export default PersonalInfoForm;
