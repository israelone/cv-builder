import "./App.css";
import React, { Component } from "react";
import Forms from "./components/forms";
import GlobalFonts from "./fonts/fonts";

// Remove functionality needs to be fixed
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
