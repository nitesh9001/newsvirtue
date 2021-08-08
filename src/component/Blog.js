import React, { Component } from "react";

class Blog extends Component {
  state = {
    startanimate: false,
  };

  animate = (e) => {
    this.setState({
      startanimate: true,
      x: e.screenX - 50,
      y: e.screenY - 170,
    });
    console.log(e);
  };

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          overflow: "hideen",
        }}
        onMouseMove={this.animate}
        className="main_div_blog"
      >
        {this.state.startanimate ? (
          <div
            className="animartion-circle"
            style={{ top: this.state.y, left: this.state.x }}
          >
            <div className="animartion-circle1">
              <div className="animartion-circle2">
                <div className="animartion-circle3"></div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <div className="center_blog">
          <h3>Launching very soon!</h3>
          <div className="animation_air">🚀</div>
        </div>
      </div>
    );
  }
}

export default Blog;
