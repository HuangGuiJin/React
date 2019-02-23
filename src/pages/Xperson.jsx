import React, { Component } from "react";
import Ka from "../images/b1.jpg";
import Xiao from "../images/b2.jpg";
import Xbanner from "../component/Xbanner";
import Person from "../component/Person";
import { Carousel } from "antd";

 class Xperson extends Component {
  render() {
    return (
      <div style={{ height: "auto",margin:'0 auto',width:'1200px'}}>
         <Carousel autoplay>
        <div>
          <h3><img src="http://www.cmbc.com.cn/upload/2017X/10/C.jpg" alt="" style={{width:'100%',height:'360px'}} /></h3>
        </div>
        <div>
          <h3><img src="http://www.cmbc.com.cn/upload/2017X/10/B.jpg" alt="" style={{width:'100%',height:'360px'}}/></h3>
        </div>
      
        
      </Carousel>

        <div class="index_personalbox">
        <span class="ms_ileft" id="location">
          当前位置：
          <a href="/index.htm">首页</a> &gt;
          <span class="blue" style={{ color: "#0072bd" }}>
          小微金融
          </span>
        </span>
      </div>
        <div  className="personal_conthight" style={{ height: "270px",margin:'0 auto',width: "1200px",background:'#fff',position:'relative' }}>
          <div
               className="personal_conthight"
            style={{ width: "1200px", margin: "0 auto" }}
          >
            <div    className="company_cont_ul">
              <div    className="company_title">
                <div    className="company_title_left">
                  <a href="/xwjr/rzcp/wld/index.htm" style={{color:"#1890ff"}}>网乐贷</a>
                </div>
              </div>
              <div    className="small_image">
                <a href="/xwjr/rzcp/wld/index.htm">
                  <img alt="" src={Ka} />
                </a>
              </div>

              <p    className="company_p">
                <a href="/xwjr/rzcp/wld/index.htm">
                  网乐贷产品是民生银行对有银联POS机具的小微商户推出的以信用为授信基础的经营性贷款产品。无需抵押，最高授信额度20万元。5步骤申请贷款，5分钟知晓额度，最快当天可提款。民生网乐贷，解你一时之需，助你一臂之力
                </a>
              </p>
            </div>
          

          <div    className="company_cont_ul">
            <div    className="company_title">
              <div    className="company_title_left">
                <a href="/xwjr/rzcp/gylcp/slt/index.htm" style={{color:"#1890ff"}}>商链通</a>
              </div>
            </div>
            <p    className="fontbold12 paddingtop10 paddingbottom10">
              <a href="/xwjr/rzcp/gylcp/slt/2016/12/4090806111398338.htm">
                民生商链通——携手共赢 链接未来
              </a>
            </p>
            <p    className="company_p_bg_none">
              <a href="/xwjr/rzcp/gylcp/slt/2016/12/4090806111398338.htm">
                在“互联网+”背景下，具有超前意识和战略眼光的核心企业越来越多地重视上下游供应商、经销商发展，从单纯的链式发展，向“拓朴化”发展，绑定、支持、共赢、协作成为其重要竞争要素。
              </a>
            </p>
          </div>

          <div    className="personal_cont_ulnone">
            <div    className="company_title" style={{ height: "auto" }}>
              <div    className="company_title">
                <a style={{color:"#1890ff"}} href="/xwjr/zhjrfw/xwmszjl/xwmszjl/index.htm">
                  小微美食召集令
                </a>
              </div>
              <div
                   className="company_p_bg_none"
                style={{ height: "64px", width: "355px" }}
              >
                <img
                  src={Xiao}
                  alt=""
                  style={{ width: "103px", height: "60px", float: "left" }}
                />
                <div    className="small_bankcont">
                  <p className="fontbold12">
                    <a
                      title="“月月有活动、小微有声音”7-8月份活动"
                      href="/xwjr/zhjrfw/zxkhhd/2015/07/1447410902364332.htm"
                    >
                      “月月有活动、小微有...
                    </a>
                  </p>
                  
                </div>
              </div>
              <div    className="clear" />
            </div>
            <div    className="company_title" style={{ height: "auto" }}>
              <div    className="clear" />
            </div>
          </div>
          </div>
        </div>

        <div  className="company_cont" style={{ margin: "0 auto", width: "1200px",height:'222px',background:'#fff' }}>
          <div  className="company_cont_ulwide">
            <div  className="company_title">
              <div  className="company_title_left" style={{color:'rgb(24, 144, 255)'}}>小微特色产品</div>
            </div>
            <div  className="companyBox">
              <span
                style={{
                  height: "116px",
                  width: "147px",
                  display: "inline-block"
                }}
              >
                <a
                  href="/xwjr/tscp/lsj/index.htm"
                  style={{
                    width: "86px",
                    height: "86px",
                    float: "left",
                    display: "inline-block"
                  }}
                >
                  <img
                    src="http://www.cmbc.com.cn/upload/2016/06/sdaf.jpg"
                    alt=""
                  />
                </a>
                <a
                  style={{
                    display: "inline-block",
                    width: "147px",
                    float: "left"
                  }}
                   className="cbWord"
                  href="/xwjr/tscp/lsj/index.htm"
                >
                  财神卡
                </a>
              </span>
              <span
                style={{
                  height: "116px",
                  width: "147px",
                  display: "inline-block"
                }}
              >
                <a
                  href="/xwjr/tscp/lsj/index.htm"
                  style={{
                    width: "86px",
                    height: "86px",
                    float: "left",
                    display: "inline-block"
                  }}
                >
                  <img
                    src="http://www.cmbc.com.cn/upload/2016/06/ytu.jpg"
                    alt=""
                  />
                </a>
                <a
                  style={{
                    display: "inline-block",
                    width: "147px",
                    float: "left"
                  }}
                   className="cbWord"
                  href="/xwjr/tscp/lsj/index.htm"
                >
                  乐生金
                </a>
              </span>
              <span
                style={{
                  height: "116px",
                  width: "147px",
                  display: "inline-block"
                }}
              >
                <a
                  href="/xwjr/tscp/lsj/index.htm"
                  style={{
                    width: "86px",
                    height: "86px",
                    float: "left",
                    display: "inline-block"
                  }}
                >
                  <img
                    src="http://www.cmbc.com.cn/upload/2016/06/dsf.jpg"
                    alt=""
                  />
                </a>
                <a
                  style={{
                    display: "inline-block",
                    width: "147px",
                    float: "left"
                  }}
                   className="cbWord"
                  href="/xwjr/tscp/lsj/index.htm"
                >
                  乐收银
                </a>
              </span>
              <span
                style={{
                  height: "116px",
                  width: "147px",
                  display: "inline-block"
                }}
              >
                <a
                  href="/xwjr/tscp/lsj/index.htm"
                  style={{
                    width: "86px",
                    height: "86px",
                    float: "left",
                    display: "inline-block"
                  }}
                >
                  <img
                    src="http://www.cmbc.com.cn/upload/2016/06/dwe.jpg"
                    alt=""
                  />
                </a>
                <a
                  style={{
                    display: "inline-block",
                    width: "147px",
                    float: "left"
                  }}
                   className="cbWord"
                  href="/xwjr/tscp/lsj/index.htm"
                >
                  易押贷
                </a>
              </span>
              <span
                style={{
                  height: "116px",
                  width: "147px",
                  display: "inline-block"
                }}
              >
                <a
                  href="/xwjr/tscp/lsj/index.htm"
                  style={{
                    width: "86px",
                    height: "86px",
                    float: "left",
                    display: "inline-block"
                  }}
                >
                  <img
                    src="http://www.cmbc.com.cn/upload/2016/06/fdg.jpg"
                    alt=""
                  />
                </a>
                <a
                  style={{
                    display: "inline-block",
                    width: "147px",
                    float: "left"
                  }}
                   className="cbWord"
                  href="/xwjr/tscp/lsj/index.htm"
                >
                  商隆卡
                </a>
              </span>
            </div>
          </div>

          <div  className="personal_cont_ulnone">
            <div  className="company_title">
              <div  className="company_title_left">
                <a href="/xwjr/cssyhzs/hddt/index.htm">活动动态</a>
              </div>
            </div>
            <p  className="fontbold12">
              <a href="/xwjr/cssyhzs/hddt/2015/06/1730079280139962.htm">
                宝鸡分行成功召开首届合作社社长联席会议 
              </a>
            </p>
            <p  className="company_p_bg_none">
              <a
                href="/xwjr/cssyhzs/hddt/2015/06/1730079280139962.htm"
                title="为有效传达合作社推动与最新管理政策，坚定合作社发展信心，明确合作社建设目标，同时做好阶段性工作总结和反馈，西安分行宝鸡二级分行组织召开了首届合作社社长联席会议，宝鸡二级分行小微业务主管领导和小微业务相关部门及各合作社社长30余人参加了此次会议。"
              >
                为有效传达合作社推动与最新管理政策，坚定合作社发展信心，明确合作社建设目标，同时做好阶段性... 
              </a>
            </p>
            <p  className="fontbold12">
              <a href="/xwjr/cssyhzs/hddt/2015/05/4030113013995858.htm">
                “女性蝶变季”之“女性美容养生大课堂”活动圆满成功 
              </a>
            </p>
            <p  className="company_p_bg_none">
              <a
                href="/xwjr/cssyhzs/hddt/2015/05/4030113013995858.htm"
                title="4月29日，由合肥市小微企业金融服务促进会和民生银行合肥分行合作开展的“女性蝶变季”之“女性美容养生大课堂”活动在合肥分行经开区支行顺利举行,本次活动定向面对合肥分行小微和小区的女性高端客户开展，为她们量身打造了一场美丽的盛宴。"
              >
                4月29日，由合肥市小微企业金融服务促进会和民生银行合肥分行合作开展的“女性蝶变季”之“女... 
              </a>
            </p>
            <div  className="company_div" />
          </div>
        </div>
        <Person />
        
      </div>
    );
  }
}
export default Xperson;
