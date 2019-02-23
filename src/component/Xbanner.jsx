import React, { Component } from "react";
import { Carousel } from "antd";

import Dimg1 from "../images/1.jpg";
import Dimg2 from "../images/2.jpg";
import Dimg3 from "../images/3.jpg";


class Xbanner extends Component {
  render() {
    return (
        <div style={{width:'1200px',height:'360px',margin:'0 auto'}}>
      <Carousel autoplay>
        <div>
          <h3><img src={Dimg1} alt="" style={{width:'100%',height:'360px'}} /></h3>
        </div>
        <div>
          <h3><img src={Dimg2} alt="" style={{width:'100%',height:'360px'}}/></h3>
        </div>
        <div>
          <h3><img src={Dimg3} alt="" style={{width:'100%',height:'360px'}}/></h3>
        </div>
        <div>
          <h3><img src="http://www.cmbc.com.cn/upload/images/2019/1/web.jpg" alt="" style={{width:'100%',height:'360px'}}/></h3>
        </div>
        
      </Carousel>
      </div>
    );
  }
}
export default Xbanner;
