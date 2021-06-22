import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import App from "./App";
class router extends Component {
  render() {
    return (
      <Router>
        <Route exact path={"/"} component={App} />
      </Router>
    );
  }
}

export default router;
