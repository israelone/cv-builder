import React from "react";
import styled from "styled-components";
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

const PersonalInfoForm = (props) => {
  return (
    <FormContainer>
      <FormHeader>Personal Information</FormHeader>
      <Form>
        <Label text={"Name:"} />
        <Input
          onChange={props.personalInformationHandler}
          required={true}
          type="text"
          name="name"
        ></Input>
        <Label text={"Occupation:"} />
        <Input
          onChange={props.personalInformationHandler}
          required={true}
          type="text"
          name="occupation"
        ></Input>
        <Label text={"Address:"} />
        <Input
          onChange={props.personalInformationHandler}
          required={true}
          type="text"
          name="address"
        ></Input>
        <Label text={"City:"} />
        <Input
          onChange={props.personalInformationHandler}
          required={true}
          type="text"
          name="city"
        ></Input>
        <Label text={"Country:"} />
        <Input
          onChange={props.personalInformationHandler}
          required={true}
          type="text"
          name="country"
        ></Input>
        <Label text={"Email:"} />
        <Input
          onChange={props.personalInformationHandler}
          required={true}
          type="email"
          name="email"
        ></Input>
        <Label text={"Phone Number:"} />
        <Input
          onChange={props.personalInformationHandler}
          required={true}
          type="tel"
          name="number"
        ></Input>
        <Label text={"Summary:"} />
        <Input
          onChange={props.personalInformationHandler}
          required={true}
          type="text-area"
          name="summary"
        ></Input>
      </Form>
    </FormContainer>
  );
};

export default PersonalInfoForm;
