import React, { Component } from "react";
import Footer from "./Footer";
class Rating extends Component {
  render() {
    return (
      <>
        <div className="rating_section">
          <div className="wrapper_section">
            <div className="rating_heading">Why should you read ?</div>
            <div className="sections_for_rating">
              <div className="div_section">
                <div className="rating_icons">
                  <p>4.5</p>
                </div>
                <div className="content-rating-block">
                  <div className="heading_rating">
                    <p>Loved by users</p>
                  </div>
                  <div className="content_rating">
                    <p>
                      With a rating of 4.6, we’re the highest-rated news app on
                      the Playstore
                    </p>
                  </div>
                </div>
              </div>
              <div className="div_section">
                <div className="rating_icons">
                  <div className="frame4"></div>
                </div>
                <div className="content-rating-block">
                  <div className="heading_rating">
                    <p>Loved by app stores</p>
                  </div>
                  <div className="content_rating">
                    <p>
                      We’ve been in Apple’s Featured Apps showcase and Google’s
                      list of the Best Apps of 2015
                    </p>
                  </div>
                </div>
              </div>

              <div className="div_section">
                <div className="rating_icons">
                  <div className="frame5"></div>
                </div>
                <div className="content-rating-block">
                  <div className="heading_rating">
                    <p>Loved by publishers</p>
                  </div>
                  <div className="content_rating">
                    <p>
                      With more than 30 content partners globally, publishers
                      love being on Inshorts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Rating;
