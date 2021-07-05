import React, { Component } from "react";
import slider2 from "../Static/assets/slider1.png";

class Favcontnet extends Component {
  render() {
    return (
      <div>
        <div className="section-margin-center">
          <div className="left-slider">
            <div className="left-slider-inner">
              <img src={slider2} alt="" />
            </div>
          </div>
          <div className="right-slider">
            <div className="right-slider-inner">
              <p className="headings-right-slider">
                Your favourite sources in one app. In short
                <p className="text-right-slider">
                  We pick-up articles from all your favourite sources and
                  present them in 60-word shorts. Read full articles for shorts
                  that interest you, within the app
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Favcontnet;
