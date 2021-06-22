import React, { Component } from "react";
import slider1 from "../Static/assets/slider2.png";
import slider2 from "../Static/assets/slider1.png";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Rating from "./Rating";
import Footer from "./Footer";

class VerticalSlider extends Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
      <>
        <ReactFullpage
          scrollOverflow={true}
          navigation={true}
          navigationPosition="right"
          showActiveTooltip={true}
          slidesNavigation={true}
          verticalCentered={true}
          slidesNavPosition="bottom"
          sectionsColor={["#21252b", "#21252b", "#21252b", "#21252b"]}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          scrollingSpeed={600}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section section1">
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
                            Our AI engine intuitively understands what you like
                            reading, and delivers more of that in a single feed.
                            In your ‘My Feed’, everything you read, is
                            everything you need.
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section section2">
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
                            Browse through the section of your choice and
                            discover trending news topics. Share your opinion on
                            stories instantly by submitting your response on our
                            poll.
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section section3">
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
                            We pick-up articles from all your favourite sources
                            and present them in 60-word shorts. Read full
                            articles for shorts that interest you, within the
                            app
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section">
                  <Rating />
                </div>

                <div className="section"></div>
              </div>
            );
          }}
        />
      </>
    );
  }
}

export default VerticalSlider;
