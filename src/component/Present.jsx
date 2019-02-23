import React, { Component } from "react";

class Present extends Component {
  render() {
    return (
      <div class="index_personalbox">
        <span class="ms_ileft" id="location">
          当前位置：
          <a href="/index.htm">首页</a> &gt;
          <span class="blue" style={{ color: "#0072bd" }}>
            电子银行
          </span>
        </span>
      </div>
    );
  }
}

export default Present;
