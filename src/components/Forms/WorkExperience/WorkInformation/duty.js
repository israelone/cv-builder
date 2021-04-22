import React from "react";
import styled from "styled-components";

const Item = styled.li`
  &:after {
    display: inline-block;
  }
  &:before {
    white-space: pre-line;
  }
`;
const Icon = styled.i`
  cursor: pointer;
  align-self: center;
  justify-self: center;
  color: #e87676;
`;

const Duty = (props) => {
  return (
    <React.Fragment>
      <Item>{props.text}</Item>
      <Icon
        onClick={() => props.deleteDuty(props.index)}
        className="fas fa-times-circle"
      />
    </React.Fragment>
  );
};

export default Duty;
