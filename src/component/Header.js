import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Header extends Component {
  state = {
    my_file: "",
    accepted: "",
    user_Image: "",
  };
  handlec = (event) => {
    this.setState({ user_Image: event.target.files });
  };
  // display = () => {
  //   var media = new FormData();
  //   for (const key of this.state.user_Image) {
  //     console.log(key);
  //     media.append("media", key);
  //   }

  // };
  render() {
    return (
      <header className="App-header">
        <div className="app-header-logo">
          <Link to="/">
            <div className="frame-logo"></div>
          </Link>
        </div>
        <div className="app-header-nav">
          <Link to="/OneminuteRead" className="navlinkCss">
            Read Now{" "}
          </Link>
          <Link to="/carrier" className="navlinkCss">
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
