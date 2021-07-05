import React, { Component } from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Rating from "./Rating";
import Footer from "./Footer";
import ContentHome from "./ContentHome";
import PersonalizeApp from "./PersonalizeApp";
import Newscategory from "./Newscategory";
import Favcontent from "./favContent";

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
                <div className="section positon_center section1">
                  <ContentHome />
                </div>
                <div className="section section2">
                  <PersonalizeApp />
                </div>
                <div className="section section3">
                  <Newscategory />
                </div>
                <div className="section section4">
                  <Favcontent />
                </div>
                <div className="section section5">
                  <Rating />
                </div>
                <div className="section section6">
                  <Footer />
                </div>
              </div>
            );
          }}
        />
      </>
    );
  }
}

export default VerticalSlider;
