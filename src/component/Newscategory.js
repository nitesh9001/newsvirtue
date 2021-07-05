import React, { Component } from "react";
import slider2 from "../Static/assets/slider1.png";

class Newscategory extends Component {
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
                Explore an array of news categories, all in one place
                <p className="text-right-slider">
                  Browse through the section of your choice and discover
                  trending news topics. Share your opinion on stories instantly
                  by submitting your response on our poll.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newscategory;
