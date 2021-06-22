import React, { Component } from "react";
import ContentHome from "./component/ContentHome";
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
        <div className="positon_center">
          <ContentHome />
        </div>
        <div>
          <VerticalSlider />
        </div>
        <div>
          <Rating />
        </div>
      </div>
    );
  }
}

export default App;
