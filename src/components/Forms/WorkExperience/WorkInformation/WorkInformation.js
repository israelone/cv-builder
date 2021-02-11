import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: fit-content;
  width: 70%;
  display: grid;
  align-content: center;
  margin: 10px auto;
  overflow: hidden;
  grid-template-columns: 8fr 1.5fr;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  font-family: Roboto;
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

const Duty = styled.li``;

const DutiesList = styled.ul`
  overflow: hidden;
  grid-column: 1;
`;

const IconsContainer = styled.div`
  grid-row: 3;
  display: flex;
  justify-content: space-around;
  height: 100%;
  grid-column: 2;
  align-items: center;
`;

const Icons = styled.i`
  ${Container}:hover & {
    display: inline-block;
  }
`;

const RemoveIcon = styled(Icons)`
  display: none;
  grid-column: 2;
  grid-row: 2;
  color: #e87676;
  cursor: pointer;
`;

const EditIcon = styled(Icons)`
  display: none;
  grid-column: 2;
  grid-row: 2;
  cursor: pointer;
`;

class WorkInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInformation: false,
      name: "workExperience",
      index: props.index,
    };
  }

  editableToggleHandler = () => {
    console.log("worked");
    let currentState = this.state.editable;
    this.setState({
      editable: !currentState,
    });
  };

  render() {
    return (
      <Container>
        <CompanyName>{this.props.companyName}</CompanyName>
        <Role>{this.props.role}</Role>
        <DutiesList>
          {this.props.dutiesList.map((duty, index) => {
            return <Duty key={index}>{duty}</Duty>;
          })}
        </DutiesList>
        <City>{this.props.city}</City>
        <Date>{this.props.date}</Date>
        <IconsContainer>
          <RemoveIcon
            onClick={() => this.props.removeInformation(this.state.index)}
            className="fas fa-trash-alt"
          ></RemoveIcon>
          <EditIcon
            onClick={() => this.editableToggleHandler()}
            className={
              this.state.editable ? "fas fa-times-circle" : "fas fa-edit"
            }
          ></EditIcon>
        </IconsContainer>
      </Container>
    );
  }
}

export default WorkInformation;
