import "./App.css";
import React, { Component } from "react";
import Forms from "./components/forms";
import GlobalFonts from "./fonts/fonts";

//272643, ffffff, e3f6f5, bae8e8, 2c698d
class App extends Component {
  render() {
    return (
      <Forms>
        <GlobalFonts />
      </Forms>
    );
  }
}

export default App;

//add education is not working, when deleting work history it deletes the first one
