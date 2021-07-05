import React, { Component } from "react";
import slider1 from "../Static/assets/slider2.png";

class PersonalizeApp extends Component {
  render() {
    return (
      <div>
        <div className="section-margin-center">
          <div className="left-slider">
            <div className="left-slider-inner">
              <img src={slider1} alt="" />
            </div>
          </div>
          <div className="right-slider">
            <div className="right-slider-inner">
              <p className="headings-right-slider">
                Your Personal App Your Personalised Shorts.
                <p className="text-right-slider">
                  Our AI engine intuitively understands what you like reading,
                  and delivers more of that in a single feed. In your ‘My Feed’,
                  everything you read, is everything you need.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalizeApp;
