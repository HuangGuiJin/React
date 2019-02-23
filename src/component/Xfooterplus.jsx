import React, { Component } from "react";
import C1 from "../images/c1.gif";
import C2 from "../images/c2.gif";
import C3 from "../images/c3.gif";
import C4 from "../images/c4.gif";

class Xfooterplus extends Component {
  render() {
    return (
 <div className="copy">
    <div className="copy_left">版权所有:<a href="http://www.cmbc.com.cn/">中国民生银行</a> 京ICP备05020372号 </div>
    <div className="copy_left_phone">
        <div>版权所有:<a href="####">中国民生银行</a> 京ICP备05020372号</div>
    </div>
    <div className="copy_right">
        <ul id="icon_ul">
            <li>
                <a name="icon_a" href="####"><img src={C1} alt="" /></a>
                <div className="copy_hoverbox copyone" style= {{display:'none'}}>
                    <ul>
                        <li>点击或扫描</li>
                        <li>下载手机银行</li>
                        <li className="copy_use"><a href="##"  >下载体验</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <a name="icon_a" href="##"><img src={C2} alt="" /></a>
                <div className="copy_hoverbox copytwo" style={{display:'none'}}>
                    <ul>
                        <li>扫描二维码</li>
                        <li>关注微信银行</li>
                        <li className="copy_use">关注体验</li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="http://weibo.com/cmbcubao"  ><img src={C3} alt=""/></a>
            </li>
            <li>
                <a href="http://e.t.qq.com/cmbcubao"  ><img src={C4} alt=""/></a>
            </li>
        </ul>
    </div>
    <div className="copy_mid">
        <ul>
          
                        <li><a   href="/sy/flsm/index.htm">法律声明</a></li>
          
                        <li><a   href="/sy/ysqzc/index.htm">隐私权政策</a></li>
            
                        <li><a   href="/sy/wzdt/index.htm">网站地图</a></li>
       
                        <li><a   href="/sy/yqlj/index.htm">友情链接</a></li>
         
                        <li><a   href="https://mail.cmbc.com.cn/">电子邮件</a></li>
        </ul>
    </div>
    </div>
    )
  }
}

export default Xfooterplus;