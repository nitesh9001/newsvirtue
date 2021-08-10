import React, { Component } from "react";
import Header from "./component/Header";
import Rating from "./component/Rating";
import VerticalSlider from "./component/VerticalSlider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
  