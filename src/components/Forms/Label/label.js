import React from "react";
import styled from "styled-components";

const InputLabel = styled.label`
  grid-column: 1;
`;

const Label = (props) => {
  return <InputLabel>{props.text}</InputLabel>;
};

export default Label;
