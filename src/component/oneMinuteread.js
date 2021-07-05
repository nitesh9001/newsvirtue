import React, { Component } from "react";
import SliderRead from "./SliderRead";

class oneMinuteread extends Component {
  render() {
    return (
      <div className="top_positon_one_read">
        <div className="header_news_slider">
          <div className="header_title">
            <div className="wrapper_header_title">
              <p>Breaking News</p>
            </div>
          </div>
          <div className="news_header_content">
            <p>If you are going to use a passage generator</p>
          </div>
          <div className="changer_next_prev">
            <button>
              <i className="fa fa-caret-left"></i>
            </button>
            <button>
              <i className="fa fa-caret-right"></i>
            </button>
          </div>
        </div>
        <div>
          <SliderRead />
        </div>
      </div>
    );
  }
}

export default oneMinuteread;
