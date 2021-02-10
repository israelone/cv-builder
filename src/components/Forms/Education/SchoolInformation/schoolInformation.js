import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  height: 58px;
  width: 70%;
  display: grid;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  margin: 10px auto;
  overflow: hidden;
  grid-template-columns: 8fr 1.5fr;
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

const IconsContainer = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  justify-content: space-around;
  height: 100%;
  grid-column: 2;
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

class SchoolInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInformation: false,
      index: props.index,
      name: "schools",
      editable: false,
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
        <Name contentEditable={this.state.editable}>
          {this.props.schoolName}
        </Name>
        <Degree contentEditable={this.state.editable}>
          {this.props.degree}
        </Degree>
        <GraduationYear contentEditable={this.state.editable}>
          {this.props.graduationYear}
        </GraduationYear>
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

export default SchoolInformation;
