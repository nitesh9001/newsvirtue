import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="app-header-logo">
          <div className="frame-logo"></div>
        </div>
        <div className="app-header-nav">
          <Link to="/OneminuteRead" className="navlinkCss">
            Read Now{" "}
          </Link>
          <Link to="/carriers" className="navlinkCss">
            Carriers{" "}
          </Link>
          <Link to="/blog" className="navlinkCss">
            Blog{" "}
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
