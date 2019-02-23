import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../component/Login";

export default class Xlogin extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}
