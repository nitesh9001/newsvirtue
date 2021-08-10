import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Static/Scss/header.scss";
import "./Static/Scss/contentHome.scss";
import "./Static/Scss/verticleSlier.scss";
import "./Static/Scss/rating.scss";
import "./Static/Scss/footer.scss";
import "./Static/Scss/carrier.scss";
import "./Static/Scss/onemiuteRead.scss";
import reportWebVitals from "./reportWebVitals";
import Router from "./router";
import * as ServiceWorker from "./serviceworker";
ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
ServiceWorker.register();
