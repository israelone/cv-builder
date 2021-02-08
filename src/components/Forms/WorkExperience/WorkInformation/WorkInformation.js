import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  height: fit-content;
  width: 70%;
  display: grid;
  align-content: center;
  margin: 10px auto;
  overflow: hidden;
  grid-template-columns: 8fr 1fr;
  padding: 10px;
`;

const CompanyName = styled.h4`
  grid-column: 1;
  margin: 0;
`;

const Role = styled.h4`
  grid-column: 1;
  margin: 0;
`;

const City = styled.h4`
  grid-column: 1;
  margin: 0;
`;

const Date = styled.h4`
  grid-column: 1;
  margin: 0;
`;

const Icon = styled.i`
  ${Container}:hover & {
    display: inline-block;
  }
  display: none;
  grid-column: 2;
  grid-row: 3;
  color: #e87676;
  cursor: pointer;
  align-self: center;
`;

const Duty = styled.li``;

const DutiesList = styled.ul`
  overflow: hidden;
  grid-column: 1;
`;

class WorkInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInformation: false,
    };
  }

  render() {
    return (
      <Container>
        <CompanyName>{this.props.companyName}</CompanyName>
        <Role>{this.props.role}</Role>
        <DutiesList>
          {this.props.dutiesList.map((duty) => {
            return <Duty>{duty}</Duty>;
          })}
        </DutiesList>
        <City>{this.props.city}</City>
        <Date>{this.props.date}</Date>
        <Icon className="fas fa-times-circle" />
      </Container>
    );
  }
}

export default WorkInformation;
