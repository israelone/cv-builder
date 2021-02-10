import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 500px;
  height: fit-content;
  margin: 0 auto;
  border: 2px solid black;
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  padding-left: 10px;
  margin: 10px 0;
  display: grid;
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
  font-family: Roboto;
`;

const FormHeader = styled.h3`
  text-align: center;
  font-family: Cabin;
  letter-spacing: 5px;
`;

const Form = styled.form`
  display: grid;
  width: 300px;
  margin: 0 auto;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  width: 273px;
  height: 134px;
`;

const PersonalInfoForm = (props) => {
  return (
    <FormContainer>
      <FormHeader>Personal Information</FormHeader>
      <Form>
        <InputContainer>
          <Label>Name:</Label>
          <Input
            onChange={props.personalInformationHandler}
            required={true}
            type="text"
            name="name"
            placeHolder={"Your name"}
            value={props.name}
          ></Input>
        </InputContainer>
        <InputContainer>
          <Label>Occupation:</Label>
          <Input
            onChange={props.personalInformationHandler}
            required={true}
            type="text"
            name="occupation"
            value={props.occupation}
          ></Input>
        </InputContainer>
        <InputContainer>
          <Label>Address:</Label>
          <Input
            onChange={props.personalInformationHandler}
            required={true}
            type="text"
            name="address"
            value={props.address}
          ></Input>
        </InputContainer>
        <InputContainer>
          <Label>City:</Label>
          <Input
            onChange={props.personalInformationHandler}
            required={true}
            type="text"
            name="city"
            value={props.city}
          ></Input>
        </InputContainer>
        <InputContainer>
          <Label>Country:</Label>
          <Input
            onChange={props.personalInformationHandler}
            required={true}
            type="text"
            name="country"
            value={props.country}
          ></Input>
        </InputContainer>
        <InputContainer>
          <Label>Email:</Label>
          <Input
            onChange={props.personalInformationHandler}
            required={true}
            type="email"
            name="email"
            value={props.email}
          ></Input>
        </InputContainer>
        <InputContainer>
          <Label>Phone Number:</Label>
          <Input
            onChange={props.personalInformationHandler}
            required={true}
            type="tel"
            name="number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={props.number}
          ></Input>
        </InputContainer>

        <InputContainer>
          <Label>Summary:</Label>
          <TextArea
            onChange={props.personalInformationHandler}
            required={true}
            type="textarea"
            name="summary"
            value={props.summary}
          ></TextArea>
        </InputContainer>
      </Form>
    </FormContainer>
  );
};

export default PersonalInfoForm;
