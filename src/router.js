import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Blog from "./component/Blog";
import carriers from "./component/carriers";
import Form from "./component/Form";
import NewsList from "./component/NewsLists";
import oneMinuteread from "./component/oneMinuteread";
import SingleNews from "./component/singleNews";
import VerticalSlider from "./component/VerticalSlider";

class router extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path={"/"} component={VerticalSlider} />
          <Route exact path={"/carrier"} component={carriers} />
          <Route exact path={"/blog"} component={Blog} />
          <Route exact path={"/news"} component={NewsList} />
          <Route exact path={"/form"} component={Form} />
          <Route exact path={"/newsfeed/:newsid"} component={SingleNews} />
          <Route exact path={"/OneminuteRead"} component={oneMinuteread} />
        </App>
      </Router>
    );
  }
}

export default router;
