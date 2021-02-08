import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  height: 58px;
  width: 70%;
  display: grid;
  align-content: center;
  margin: 10px auto;
  overflow: hidden;
  grid-template-columns: 8fr 1fr;
`;

const Name = styled.h4`
  text-align: center;
  grid-column: 1;
  margin: 0;
`;

const Degree = styled.h5`
  text-align: center;
  grid-column: 1;
  margin: 0;
`;

const GraduationYear = styled.h5`
  text-align: center;
  grid-column: 1;
  margin: 0;
`;

const Icon = styled.i`
  ${Container}:hover & {
    display: inline-block;
  }
  display: none;
  grid-column: 2;
  grid-row: 2;
  color: #e87676;
  cursor: pointer;
`;

class SchoolInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInformation: false,
    };
  }
  render() {
    return (
      <Container>
        <Name contentEditable={true}>{this.props.schoolName}</Name>
        <Degree contentEditable={true}>{this.props.degree}</Degree>
        <GraduationYear>{this.props.graduationYear}</GraduationYear>
        <Icon
          onClick={() => this.props.removeInformation(this.props.index)}
          className="fas fa-times-circle"
        ></Icon>
      </Container>
    );
  }
}

export default SchoolInformation;
