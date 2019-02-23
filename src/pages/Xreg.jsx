import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Reg from "../component/Reg";

export default class XReg extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <Reg/>
      </div>
    );
  }
}
