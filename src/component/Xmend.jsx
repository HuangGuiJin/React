import React, { Component } from "react";

class Xmend extends Component {
  render() {
    return (
      <div className="grey_bg">
        <h2 className="grey_msTit">为您推荐</h2>
        <ul>
          <li className="grey_msBox">
            <span className="ms_mbImg">
              <a href="/dzyx/sjyx/qyb/cpjs/index.htm">
                {" "}
                <img
                  src="http://www.cmbc.com.cn/upload/2016/06/qysjyh.jpg"
                  alt=""
                />
              </a>
            </span>{" "}
            <span className="ms_mbWord">
              <h3>
                <a href="/dzyx/sjyx/qyb/cpjs/index.htm"> 企业手机银行 </a>
              </h3>
              <p>帮助企业客户提高企业经营效率，降低经营成本。</p>
            </span>
          </li>
          <li className="grey_msBox">
            <span className="ms_mbImg">
              <a href="/dzyx/wsyx/qywsyx/ywjs/index.htm">
                {" "}
                <img
                  src="http://www.cmbc.com.cn/upload/2016/06/qywsyh.JPG"
                  alt=""
                />
              </a>
            </span>{" "}
            <span className="ms_mbWord">
              <h3>
                <a href="/dzyx/wsyx/qywsyx/ywjs/index.htm"> 企业网上银行 </a>
              </h3>
              <p>提供一个全新的、空地对接的企业电子金融服务平台。</p>
            </span>
          </li>
          <li className="grey_msBox">
            <span className="ms_mbImg">
              <a href="/tyjr/index.htm">
                {" "}
                <img
                  src="http://www.cmbc.com.cn/upload/2016/06/tyjr.jpg"
                  alt=""
                />
              </a>
            </span>{" "}
            <span className="ms_mbWord">
              <h3>
                <a href="/tyjr/index.htm"> 同业金融 </a>
              </h3>
              <p>以金融同业客户为对象提供资金融资便利与支持。</p>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
export default Xmend;
