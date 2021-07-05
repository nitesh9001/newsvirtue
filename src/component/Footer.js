import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer_section">
        <div className="download_link_for_app_store">
          <div className="download_link_images">
            <div className="download_link_images_flex ">
              <div className="frame2_down_footer"></div>
            </div>
            <div className="download_link_images_flex ">
              <div className="frame3_down_footer"></div>
            </div>
          </div>
        </div>
        <div className="innerfooter_section">
          <div className="section_naviagtion_section_left">
            <ul>
              <li>
                <Link className="link_css_styling" to="/">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="link_css_styling" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="link_css_styling" to="/">
                  Editorial Policy - Key Highlights
                </Link>
              </li>
              <li>
                <Link className="link_css_styling" to="/">
                  Want to be Publisher
                </Link>
              </li>
            </ul>
            <div className="copyright-section-bottom">
              <div>
                <p>News Virtue pvt Ltd</p>
                <p>© COPYRIGHT 2021</p>
              </div>
            </div>
          </div>
          <div className="section_socialmedia_right">
            <div className="section_logo_and_branding">
              <div className="logo_bottom">
                <div className="frame6"> </div>
              </div>
            </div>
            <div className="social_media_list">
              <ul>
                <li>
                  <Link className="link_css_styling" to="/">
                    <div className="parallerogram_skew-left"></div>
                    <div className="frame_facebook"></div>
                    <div className="parallerogram_skew_right"></div>
                  </Link>
                </li>

                <li>
                  <Link className="link_css_styling" to="/">
                    <div className="parallerogram_skew-left"></div>
                    <div className="frame_linked"></div>
                    <div className="parallerogram_skew_right"></div>
                  </Link>
                </li>

                <li>
                  <Link className="link_css_styling" to="/">
                    <div className="parallerogram_skew-left"></div>
                    <div className="frame_insta"></div>
                    <div className="parallerogram_skew_right"></div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sucribemodel">
              <input placeholder="Email to Suscribe News" type="text" />
              <button>Suscribe</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
