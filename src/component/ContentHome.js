import React, { Component } from "react";

class ContentHome extends Component {
  render() {
    return (
      <div className="content_app_description">
        <div className="content_app_image">
          <div className="frame1"></div>
        </div>
        <div className="content_app_info">
          <div className="dark_bold_heading">Stay informed in 1 min read.</div>
          <div className="light_content">
            We understand no one have time to go through long news articles
            everyday. So we cut the clutter and deliver them, in 60-word shorts
            or 1 min read. Short news for the mobile generation
          </div>
          <div className="download_link_images">
            <div className="download_link_images_flex">
              <div className="frame2"></div>
            </div>
            <div className="download_link_images_flex">
              <div className="frame3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentHome;
