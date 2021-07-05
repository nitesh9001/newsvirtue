import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Blog from "./component/Blog";
import carriers from "./component/carriers";
import oneMinuteread from "./component/oneMinuteread";
import VerticalSlider from "./component/VerticalSlider";
class router extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path={"/"} component={VerticalSlider} />
          <Route exact path={"/carrier"} component={carriers} />
          <Route exact path={"/blog"} component={Blog} />
          <Route exact path={"/OneminuteRead"} component={oneMinuteread} />
        </App>
      </Router>
    );
  }
}

export default router;
