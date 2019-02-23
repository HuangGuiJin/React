import React, { Component } from "react";
import { Carousel } from "antd";
import Xmend from "../component/Xmend";

class Xtrade extends Component {
  render() {
    return (
      <div style={{background:'#fff',width:'1200px',margin:'0 auto'}}>
        <div
          style={{
           
            width: "1200px",
            height: "360px",
            margin: "0 auto"
          }}
        >
          <Carousel autoplay>
            <div>
              <h3>
                <img
                  src="http://www.cmbc.com.cn/upload/2016/16/ty1.jpg"
                  alt=""
                  style={{ width: "100%", height: "360px" }}
                />
              </h3>
            </div>
            <div>
              <h3>
                <img
                  src="http://www.cmbc.com.cn/upload/2016/16/ty2.jpg"
                  alt=""
                  style={{ width: "100%", height: "360px" }}
                />
              </h3>
            </div>
            <div>
              <h3>
                <img
                  src="http://www.cmbc.com.cn/upload/adBanner/011200x200.jpg"
                  alt=""
                  style={{ width: "100%", height: "360px" }}
                />
              </h3>
            </div>
          </Carousel>
        </div>

        <div className="index_personalbox">
          <span className="ms_ileft" id="location">
            当前位置：
            <a href="/index.htm">首页</a> &gt;
            <span className="blue" style={{ color: "#0072bd" }}>
              同业金融
            </span>
          </span>
        </div>


        <div className="company_new">
          <div className="company_cont_ul">
            <div className="company_title">
              <div className="company_title_left left">
                <a style={{color:'#09569F'}} href="https://e.cmbc.com.cn/eweb/static/current/index.html">
                资金融通
                </a>
              </div>

              <div className="company_title_right" />
            </div>
            <p className="company_p">
              <a
                title="现金盈，开放式的企业现金管理平台，为企业客户提供便捷的、高流动、低风险、智能化财富管理服务。"
                href="https://e.cmbc.com.cn/eweb/static/current/index.html"
              ><strong><b>综合授信:</b></strong>
                我行在对授信客户的业务和财务主要指标进行综合分析的基础上，评定其信用等级，根据其信用等级和公司规模，相应确定授...
              </a>
            </p>
            <div className="company_div">
              <div className="company_div_li">
              <ul style={{float:"left"}}>
                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/gjyw/gjjsl/mshqshGPI/index.htm">
                    综合授信
                    </a>
                  </li>

                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/myrz/gnxyz/gnxyz/index.htm">同业存款</a>
                  </li>

                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/xjgl/txlcp/zbt/index.htm">同业拆借</a>
                  </li>

                  
                </ul>
              </div>
              <div className="company_div_img" >
                <a href="https://e.cmbc.com.cn/eweb/static/current/index.html">
                  <img style={{float:"right"}}
                    src="http://www.cmbc.com.cn/upload/2016/06/zjrt.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="clear" />
          </div>

          <div className="company_cont_ul">
            <div className="company_title">
              <div className="company_title_left left">
                <a style={{color:'#09569F'}} href="/gsjr/jyyx/index.htm">资金交易</a>
              </div>
              <div className="company_title_right" />
            </div>
            <p className="company_p">
              <a
                title="民生银行交易银行业务以客户为中心，围绕客户的经营活动，提供支付结算、现金管理、国际业务、贸易融资、公司网络融资、供应链金融等综合服务，致力于打造场景化交易银行。"
                href="/gsjr/jyyx/index.htm"
              ><b>即期结售汇:</b>
                {" "}
                是即期结汇、购汇业务的统称。即期结汇是指外汇指定银行在开办业务时间内按照交易当时结售汇市场即期...... {" "}
              </a>
            </p>
            <div className="company_div">
              <div className="company_div_li"  style={{float:'left'}}>
                <ul>
                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/gjyw/gjjsl/mshqshGPI/index.htm">
                    即期人民币结售汇
                    </a>
                  </li>

                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/myrz/gnxyz/gnxyz/index.htm">即期外汇买卖</a>
                  </li>

                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/xjgl/txlcp/zbt/index.htm">债券即期交易</a>
                  </li>

                  
                </ul>
              </div>
              <div className="company_div_img"  style={{float:'right'}}>
                <a href="/gsjr/jyyx/index.htm">
                  <img
                    src="http://www.cmbc.com.cn/upload/2016/06/zjjy.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="clear" />
          </div>
          


          <div className="company_cont_ul" style={{background:'none'}}>
            <div className="company_title">
              <div className="company_title_left left">
                <a style={{color:'#09569F'}} href="/gsjr/jyyx/index.htm">银银合作</a>
              </div>
              <div className="company_title_right" />
            </div>
            <p className="company_p">
              <a
                title="民生银行交易银行业务以客户为中心，围绕客户的经营活动，提供支付结算、现金管理、国际业务、贸易融资、公司网络融资、供应链金融等综合服务，致力于打造场景化交易银行。"
                href="/gsjr/jyyx/index.htm"
              ><b><b>理财投资:</b></b>
                {" "}
                我行可为有投资需要的客户提供各类理财产品，包括货币市场类、信用市场类、资本市场类、组合投资类等。我行在理财产品... 市场...{" "}
              </a>
            </p>
            <div className="company_div">
              <div className="company_div_li"  style={{float:'left'}}>
                <ul>
                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/gjyw/gjjsl/mshqshGPI/index.htm">
                    理财产品投资
                    </a>
                  </li>

                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/myrz/gnxyz/gnxyz/index.htm">国内银行代理行业务</a>
                  </li>

                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/xjgl/txlcp/zbt/index.htm">合作办理远期结售汇</a>
                  </li>

                 
                </ul>
              </div>
              <div className="company_div_img"  style={{float:'right'}}>
                <a href="/gsjr/jyyx/index.htm">
                  <img
                    src="http://www.cmbc.com.cn/upload/2016/06/yyhz.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="clear" />
          </div>

         
        </div>

        <div className="company_new">
          <div className="company_cont_ul">
            <div className="company_title">
              <div className="company_title_left left">
                <a style={{color:'#09569F'}} href="https://e.cmbc.com.cn/eweb/static/current/index.html">
                银保合作
                </a>
              </div>

              <div className="company_title_right" />
            </div>
            <p className="company_p">
              <a
                title="现金盈，开放式的企业现金管理平台，为企业客户提供便捷的、高流动、低风险、智能化财富管理服务。"
                href="https://e.cmbc.com.cn/eweb/static/current/index.html"
              ><strong><b>保险协议存款:</b></strong>
                我行按照中国人民银行或中国银行业监督管理委员会有关规定，与保险公司通过签订协议约定存放利率办......
              </a>
            </p>
            <div className="company_div">
              <div className="company_div_li">
              <ul style={{float:"left"}}>
                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/gjyw/gjjsl/mshqshGPI/index.htm">
                    保险协议存款
                    </a>
                  </li>

                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/myrz/gnxyz/gnxyz/index.htm">保险产品代理销售</a>
                  </li>

                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/xjgl/txlcp/zbt/index.htm">保险公司资金托管</a>
                  </li>

                  
                </ul>
              </div>
              <div className="company_div_img" >
                <a href="https://e.cmbc.com.cn/eweb/static/current/index.html">
                  <img style={{float:"right"}}
                    src="http://www.cmbc.com.cn/upload/2016/06/ybhz.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="clear" />
          </div>

          <div className="company_cont_ul">
            <div className="company_title">
              <div className="company_title_left left">
                <a style={{color:'#09569F'}} href="/gsjr/jyyx/index.htm">银信合作</a>
              </div>
              <div className="company_title_right" />
            </div>
            <p className="company_p">
              <a
                title="民生银行交易银行业务以客户为中心，围绕客户的经营活动，提供支付结算、现金管理、国际业务、贸易融资、公司网络融资、供应链金融等综合服务，致力于打造场景化交易银行。"
                href="/gsjr/jyyx/index.htm"
              ><b>代理销售资产管理计划:</b>
                {" "}
                我行通过分支机构网点对证券公司公开发行的资产管理计划进行代理销售。我行可借助先进的代............ {" "}
              </a>
            </p>
            <div className="company_div">
              <div className="company_div_li"  style={{float:'left'}}>
                <ul>
                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/gjyw/gjjsl/mshqshGPI/index.htm">
                    代理销售资产管理计划
                    </a>
                  </li>

                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/myrz/gnxyz/gnxyz/index.htm">专项资产管...</a>
                  </li>

                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/xjgl/txlcp/zbt/index.htm">中小企业私募债</a>
                  </li>

                  
                </ul>
              </div>
              <div className="company_div_img"  style={{float:'right'}}>
                <a href="/gsjr/jyyx/index.htm">
                  <img
                    src="http://www.cmbc.com.cn/upload/2016/06/yzhz.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="clear" />
          </div>
          


          <div className="company_cont_ul" style={{background:'none'}}>
            <div className="company_title">
              <div className="company_title_left left">
                <a style={{color:'#09569F'}} href="/gsjr/jyyx/index.htm">综合性合作</a>
              </div>
              <div className="company_title_right" />
            </div>
            <p className="company_p">
              <a
                title="民生银行交易银行业务以客户为中心，围绕客户的经营活动，提供支付结算、现金管理、国际业务、贸易融资、公司网络融资、供应链金融等综合服务，致力于打造场景化交易银行。"
                href="/gsjr/jyyx/index.htm"
              ><b><b>同业网银:</b></b>
                {" "}
                我行为金融机构客户开办同业网银业务，客户可通过同业网银办理同业存放，并实现活期转定期、提前支取等...... 市场...{" "}
              </a>
            </p>
            <div className="company_div">
              <div className="company_div_li"  style={{float:'left'}}>
                <ul>
                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/gjyw/gjjsl/mshqshGPI/index.htm">
                    结算代理业务
                    </a>
                  </li>

                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/myrz/gnxyz/gnxyz/index.htm">亚洲金融合...</a>
                  </li>

                  <li>
                    {" "}
                    <a href="/gsjr/jyyx/xjgl/txlcp/zbt/index.htm">债券销售与...</a>
                  </li>

                 
                </ul>
              </div>
              <div className="company_div_img"  style={{float:'right'}}>
                <a href="/gsjr/jyyx/index.htm">
                  <img
                    src="http://www.cmbc.com.cn/upload/2016/06/zhxhz.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="clear" />
          </div>

         
        </div>
        <div className="common_bg background_0">

				<div className="ms_fl common_chunk">
					<h3 className="aticle_title">
											<a href="/tyjr/yqhz/yqztc/index.htm"  style={{color:'#09569F'}}>银期合作</a>
					</h3>
					<div className="width263 common_img paddingbottom10">
						<a href="/tyjr/yqhz/yqztc/index.htm"><img src="http://www.cmbc.com.cn/upload/2016/06/ms7.jpg"/></a>
					</div>

					<p className="width263 common_word_p">
						<b>银期直通车:</b> <a href="/tyjr/yqhz/yqztc/index.htm" title="银期直通车：本业务为投资者提供期货资金划转相关服务，包括签约、解约及银期转账功能。投资者可通过我行柜面、网银、手机银行、以及期货公司提供的多种渠道发出资金划转指令，实现投资者银行结算账户与其期货公司资金账户之间资金定向实时划转。">本业务为投资者提供期货资金划转相关服务，包括签约、解约及银期转账...</a>
					</p>
				</div>

				<div className="ms_fl common_chunk">
										<h3 className="aticle_title">
						<a href="/tyjr/yxhz/xtlc/index.htm"  style={{color:'#09569F'}}>银信合作</a>
					</h3>
					<p className="width263 common_word_p">
						<b>信托理财:</b> <a href="/tyjr/yxhz/xtlc/index.htm" title="信托理财：我行以信托产品为基础资产，运用专业的投资理财手段和风险管理方法，针对特定客户群设计并发行风险与收益相匹配的信托理财产品，为客户提供综合理财服务。">我行以信托产品为基础资产，运用专业的投资理财手段和风险管理方法，针对特定客户群设计并发行风险与收益相匹配的信托...</a>
					</p>
					<dl className="width263 common_word_dl">
						
						<dd className="ms_fl" style={{float:"left"}}>
							 <a href="/tyjr/yxhz/xtlc/index.htm" className="ms_liststyle" title="信托理财">信托理财</a>
							 <a href="/tyjr/yxhz/dlxtzjsf/index.htm" className="ms_liststyle" title="代理信托资金收付">代理信托资</a>
							 <a href="/gsjr/zctg/ywgs/index.htm" className="ms_liststyle" title="信托计划保管">信托计划保管</a>
						</dd>
                        <dt className="ms_fr" style={{float:"left"}}>
							<a href="/tyjr/yxhz/xtlc/index.htm"><img src="http://www.cmbc.com.cn/upload/2016/06/yxhz.jpg"/></a>
						</dt>
						<div className="clear"></div>
					</dl>
				</div>
		
				<div className="ms_fl common_chunk_none">
					<h3 className="aticle_title">
											<a href="/tyjr/yzjrhzlm/index.htm"  style={{color:'#09569F'}}>亚洲金融合作联盟</a>
					</h3>
					<div className="width263 common_img">
						<a href="/tyjr/yzjrhzlm/index.htm"><img src="http://www.cmbc.com.cn/upload/2016/06/yzjrhzlm.jpg"/></a>
					</div>
				</div>


				<div className="clear"></div>
			</div>
        
         <Xmend/>
        


      </div>
    );
  }
}

export default Xtrade;
