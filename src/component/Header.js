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
  display = () => {
    var media = new FormData();
    for (const key of this.state.user_Image) {
      console.log(key);
      media.append("media", key);
    }

    axios
      .post("https://alumni-supervision.herokuapp.com/uploadMedia", media, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiZGVlcGFreWFkYXYxMDI1QGdtYWlsLmNvbSIsImlkIjoiNjA4NWM3NjZmZWI1ZDAwMDIyZjFiNjdhIiwiYWx1bW5pIjp0cnVlfSwiaWF0IjoxNjI1MDQwODIzLCJleHAiOjE2MjU0MDA4MjN9.xPvqj-ZRZkYfIVoU1UKSm9RNmmam55zzL6W8kJO3fIU",
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };
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
          <input
            type="file"
            name="my_file[]"
            id="user_Image"
            accept="image/*"
            multiple
            onChange={this.handlec}
          />
          <input type="submit" onClick={this.display} />
        </div>
      </header>
    );
  }
}

export default Header;
