import React, { Component } from "react";
import Present from "../component/Present";
import { Carousel } from "antd";
import Xmend from "../component/Xmend";


class Xerp extends Component {
  render() {
    return (
      <div>
         <div  style={{ width: "1200px", height: "360px", margin: "0 auto" }}>
         <Carousel autoplay>
        <div>
          <h3><img src="http://www.cmbc.com.cn/upload/2016/16/g2j21.jpg" alt="" style={{width:'100%',height:'360px'}} /></h3>
        </div>
        <div>
          <h3><img src="http://www.cmbc.com.cn/upload/images/2017/1/xjy.jpg" alt="" style={{width:'100%',height:'360px'}}/></h3>
        </div>
      
        
      </Carousel>
      </div>
        <Present />

        <div className="list_con">
          <div className="mobile_bank">
            <div className="title">手机银行</div>
            <div className="mobile_bank_tab_title">
              <ul>
                <li className="sel_tab">
                  <span>
                    <img
                      src="http://www.cmbc.com.cn/upload/images/dzyh/mobile_bankicon01.fw.png"
                      alt=""
                    />
                  </span>
                  <p>个人版</p>
                </li>

                <li>
                  <span>
                    <img
                      src="http://www.cmbc.com.cn/upload/images/dzyh/mobile_bankicon03.fw.png"
                      width="45"
                      height="45"
                      className="tab_se_none1"
                      alt=""
                    />
                    <img
                      src="http://www.cmbc.com.cn/upload/images/dzyh/mobile_bankicon3.fw.png"
                      width="45"
                      height="45"
                      className="tab_se_none2"
                      alt=""
                    />
                  </span>
                  <p> 企业版</p>
                </li>
                <li>
                  <span>
                    <img
                      src="http://www.cmbc.com.cn/upload/images/dzyh/mobile_bankicon04.fw.png"
                      width="45"
                      height="45"
                      className="tab_se_none1"
                      alt=""
                    />
                    <img
                      src="http://www.cmbc.com.cn/upload/images/dzyh/mobile_bankicon4.fw.png"
                      width="45"
                      height="45"
                      className="tab_se_none2"
                      alt=""
                    />
                  </span>
                  <p> 信用卡版</p>
                </li>
                <li>
                  <span>
                    <img
                      src="http://www.cmbc.com.cn/upload/images/dzyh/mobile_bankicon05.fw.png"
                      width="45"
                      height="45"
                      className="tab_se_none1"
                      alt=""
                    />
                    <img
                      src="http://www.cmbc.com.cn/upload/images/dzyh/mobile_bankicon5.fw.png"
                      width="45"
                      height="45"
                      className="tab_se_none2"
                      alt=""
                    />
                  </span>
                  <p> 微信银行</p>
                </li>
                <li className="noborder">
                  <span>
                    <img
                      src="http://www.cmbc.com.cn/upload/images/dzyh/mobile_bankicon06.fw.png"
                      width="45"
                      height="45"
                      className="tab_se_none1"
                      alt=""
                    />
                    <img
                      src="http://www.cmbc.com.cn/upload/images/dzyh/mobile_bankicon6.fw.png"
                      width="45"
                      height="45"
                      className="tab_se_none2"
                      alt=""
                    />
                  </span>
                  <p> 直销银行</p>
                </li>
              </ul>
            </div>
            <div className="mobile_bank_tab_main">
              <div className="mobile_bank_tog">
                <div className="mobile_bank_tog_down">
                  <div>
                    <dl>
                      <dt>
                        <a href="/dzyx/sjyx/grb/cpjs/index.htm">
                          <img
                            src="http://www.cmbc.com.cn/upload/2016/06/grjs.jpg"
                            width="301"
                            height="180"
                            alt=""
                          />
                        </a>
                      </dt>
                      <dd className="dd01">
                        <div>
                          <a
                            href="/dzyx/sjyx/grb/cpjs/index.htm"
                            title="/dzyx/sjyx/grb/cpjs/index.htm"
                          >
                            产品介绍:
                          </a>
                        </div>
                        <span>
                          民生手机银行是专门为智能手机和移动终端客户量身打造的移动金融服务平台，推出“我的民生”、“手机银行”、“生活圈”、“扫一扫”等金融服务专区，为您提供丰富实用的金融服务、时尚动感的界面视觉、个性易用的功能布局、全新流畅的用户体验，助您移动金融和移动生活更时尚精彩。
                        </span>

                        <p>
                          <a
                            href="/dzyx/sjyx/grb/cpjs/index.htm"
                            title="产品介绍"
                          >
                            产品介绍
                          </a>
                          <span />{" "}
                          <a
                            href="/dzyx/sjyx/grb/qykt/index.htm"
                            title="签约开通"
                          >
                            签约开通
                          </a>
                          <span />{" "}
                          <a
                            href="/dzyx/sjyx/grb/zzzcxezf/index.htm"
                            title="自助注册小额支付"
                          >
                            自助注册小额支付
                          </a>
                          <span />{" "}
                          <a
                            href="/dzyx/sjyx/grb/tsgn/index.htm"
                            title="特色功能"
                          >
                            特色功能
                          </a>
                          <span />{" "}
                          <a
                            href="/dzyx/sjyx/grb/syys/index.htm"
                            title="使用演示"
                          >
                            使用演示
                          </a>
                        </p>
                      </dd>
                      <dd className="dd02">
                        <a href="##">
                          <img
                            src="http://www.cmbc.com.cn/skin/cs/statics/images/images/mobile_bank_togimg1.jpg"
                            width="100"
                            height="100"
                            alt=""
                          />
                        </a>
                        <p>扫一扫立即下载！</p>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="mobile_bank_tog" style={{ display: "none" }}>
                <div className="mobile_bank_tog_down">
                  <div>
                    <dl>
                      <dt>
                        <a href="$type.href">
                          <img
                            src="$type.file"
                            width="301"
                            height="180"
                            alt=""
                          />
                        </a>
                      </dt>
                      <dd className="dd01">
                        <div>
                          <a href="$type.href">$type.name：</a>
                        </div>
                        <span>$type.value</span>
                        <br />
                        <p>
                          <a
                            href="/dzyx/sjyx/xwsjyx/cpjs/index.htm"
                            title="产品介绍"
                          >
                            产品介绍
                          </a>
                          <span />{" "}
                          <a href="$type.href" title="$type.name">
                            $type.name
                          </a>
                          <span />{" "}
                          <a href="$type.href" title="$type.name">
                            $type.name
                          </a>
                          <span />{" "}
                          <a href="$type.href" title="$type.name">
                            $type.name
                          </a>
                          <span />{" "}
                          <a href="$type.href" title="$type.name">
                            $type.name
                          </a>
                        </p>
                      </dd>
                      <dd className="dd02">
                        <a href="##">
                          <img
                            src="http://www.cmbc.com.cn/upload/skin/cs/statics/images/mobile_bank_togimg1.jpg"
                            width="100"
                            height="100"
                            alt=""
                          />
                        </a>
                        <p>扫一扫立即下载！</p>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        

       
       
        <div className="Online_bank">
          <div className="title">
            <a style={{fontSize:'18px'}} href="/dzyx/wsyx/grwsyx/ywjs/index.htm" title="网上银行">
              网上银行
            </a>
          </div>
          <ul>
            <li className="fist">
              <p>
                <a href="/dzyx/wsyx/grwsyx/ywjs/index.htm" title="个人网上银行">
                  个人网上银行
                </a>
              </p>
              <div className="E-bank_in-title">
                <a
                  href="/dzyx/wsyx/grwsyx/ywjs/index.htm"
                  title="开通个人网上银行，便捷易用，让您足不出户即可享受7*24小时的金融服务。"
                >
                  开通个人网上银行，便捷易用，让您足不出户即可享受7*24小时的金融服务。
                </a>
              </div>
              <div className="E-bank_in-text">
                <div className="left">
                  <ul>
                    <ol>
                      <a
                        href="/dzyx/wsyx/grwsyx/ywjs/index.htm"
                        title="业务介绍"
                      >
                        业务介绍
                      </a>
                    </ol>
                    <ol>
                      <a
                        href="/dzyx/wsyx/grwsyx/xzzq/index.htm"
                        title="下载专区"
                      >
                        下载专区
                      </a>
                    </ol>
                    <ol>
                      <a
                        href="/dzyx/wsyx/grwsyx/aqgj/index.htm"
                        title="安全工具"
                      >
                        安全工具
                      </a>
                    </ol>
                    <ol>
                      <a
                        href="/dzyx/wsyx/grwsyx/cjwt/index.htm"
                        title="常见问题"
                      >
                        常见问题
                      </a>
                    </ol>
                  </ul>
                </div>
                <div className="right">
                  <a href="/dzyx/wsyx/grwsyx/ywjs/index.htm">
                    <img
                      width="170"
                      height="108"
                      src="http://www.cmbc.com.cn/upload/2016/06/bank1.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <p>
                <a href="/dzyx/wsyx/xwwsyx/ywjs/index.htm" title="小微网上银行">
                  小微网上银行
                </a>
              </p>
              <div className="E-bank_in-title">
                <a
                  href="/dzyx/wsyx/xwwsyx/ywjs/index.htm"
                  title="开通小微网上银行，便捷易用，让您足不出户即可享受7*24小时的金融服务。"
                >
                  开通小微网上银行，便捷易用，让您足不出户即可享受7*24小时的金融服务。
                </a>
              </div>
              <div className="E-bank_in-text">
                <div className="left">
                  <ul>
                    <ol>
                      <a
                        href="/dzyx/wsyx/xwwsyx/ywjs/index.htm"
                        title="业务介绍"
                      >
                        业务介绍
                      </a>
                    </ol>
                    <ol>
                      <a
                        href="/dzyx/wsyx/xwwsyx/xzzq/index.htm"
                        title="下载专区"
                      >
                        下载专区
                      </a>
                    </ol>
                    <ol>
                      <a
                        href="/dzyx/wsyx/xwwsyx/aqgj/index.htm"
                        title="安全工具"
                      >
                        安全工具
                      </a>
                    </ol>
                    <ol>
                      <a
                        href="/dzyx/wsyx/xwwsyx/cjwt/index.htm"
                        title="常见问题"
                      >
                        常见问题
                      </a>
                    </ol>
                  </ul>
                </div>
                <div className="right">
                  <a href="/dzyx/wsyx/xwwsyx/ywjs/index.htm">
                    <img
                      width="170"
                      height="108"
                      src="http://www.cmbc.com.cn/upload/2016/06/bank2.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </li>
            <li className="noborder">
              <p>
                <a href="/dzyx/wsyx/qywsyx/ywjs/index.htm" title="企业网上银行">
                  企业网上银行
                </a>
              </p>
              <div className="E-bank_in-title">
                <a
                  href="/dzyx/wsyx/qywsyx/ywjs/index.htm"
                  title="/dzyx/wsyx/qywsyx/ywjs/index.htm"
                >
                  开通企业网上银行，便捷易用，让您足不出户即可享受7*24小时的金融服务。
                </a>
              </div>
              <div className="E-bank_in-text">
                <div className="left">
                  <ul>
                    <ol>
                      <a
                        href="/dzyx/wsyx/qywsyx/ywjs/index.htm"
                        title="业务介绍"
                      >
                        业务介绍
                      </a>
                    </ol>
                    <ol>
                      <a
                        href="/dzyx/wsyx/qywsyx/xzzq/index.htm"
                        title="下载专区"
                      >
                        下载专区
                      </a>
                    </ol>
                    <ol>
                      <a
                        href="/dzyx/wsyx/qywsyx/aqgj/index.htm"
                        title="安全工具"
                      >
                        安全工具
                      </a>
                    </ol>
                    <ol>
                      <a
                        href="http://www.cmbc.com.cn/download/demo/qiye/login.html"
                        title="演示专区"
                      >
                        演示专区
                      </a>
                    </ol>
                  </ul>
                </div>
                <div className="right">
                  <a href="/dzyx/wsyx/qywsyx/ywjs/index.htm">
                    <img
                      width="170"
                      height="108"
                      src="http://www.cmbc.com.cn/upload/2016/06/bank3.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        

        <div className="Online_bank2">
                <div className="title">
                    
                                        <a href="https://www.mszxyh.com" title="直销银行">直销银行</a></div>
                <div className="E_bank_hdp">
                    <div className="E_bank_hdp_left"></div>
                    <div className="E_bank_hdp_main">
                        <ul style={{display: 'block'}}>
                            <li>
                                <div className="E_bank_hdp_main_div left">
                                    <div className="E_bank_hdp_title">
                                                                                <a target="_black" href="https://www.mszxyh.com/peweb/kjPage.do?id=sxc" title="随心存">随心存</a></div>
                                    <div className="E_bank_hdp_img">
                                        <a target="_black" href="https://www.mszxyh.com/peweb/kjPage.do?id=sxc"><img src="http://www.cmbc.com.cn/upload/2016/06/sxc.jpg" alt=""/></a>
                                    </div>
                                    <div className="E_bank_hdp_text">
                                        <a target="_black" href="https://www.mszxyh.com/peweb/kjPage.do?id=sxc" title="随心存是中国民生银行直销银行提供的一款人民币储蓄增值服务产品。">随心存是中国民生银行直销银行提供的一款人民币储蓄增值服务产品。</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="E_bank_hdp_main_div center">
                                    <div className="E_bank_hdp_title">
                                                                                <a target="_black" href="https://www.mszxyh.com/peweb/kjPage.do?id=ryb" title="如意宝">如意宝</a></div>
                                    <div className="E_bank_hdp_img">
                                        <a target="_black" href="https://www.mszxyh.com/peweb/kjPage.do?id=ryb"><img src="http://www.cmbc.com.cn/upload/2016/06/zxryb.jpg" alt=""/></a>
                                    </div>
                                    <div className="E_bank_hdp_text">
                                        <a target="_black" href="https://www.mszxyh.com/peweb/kjPage.do?id=ryb" title="为客户电子账户活期余额完成自动申购、赎回货币基金的结算服务产品。">为客户电子账户活期余额完成自动申购、赎回货币基金的结算服务产品。</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="E_bank_hdp_main_div right">
                                    <div className="E_bank_hdp_title">
                                                                                <a target="_black" href="https://www.mszxyh.com.cn/peweb/static/dBankMain.html" title="定活宝">定活宝</a></div>
                                    <div className="E_bank_hdp_img">
                                        <a target="_black" href="https://www.mszxyh.com.cn/peweb/static/dBankMain.html"><img src="http://www.cmbc.com.cn/upload/2016/06/zxdhb.jpg" alt=""/></a>
                                    </div>
                                    <div className="E_bank_hdp_text">
                                        <a target="_black" href="https://www.mszxyh.com.cn/peweb/static/dBankMain.html" title="我行销售第三方定期类投资理财产品（如基金、保险等）">我行销售第三方定期类投资理财产品（如基金、保险等）</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="E_bank_hdp_right"></div>
                </div>
            </div>

         
          <Xmend/>

        </div>
      </div>
    );
  }
}

export default Xerp;
