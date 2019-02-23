import React, { Component } from "react";
import { Tabs, Radio } from 'antd';
import Xbanner from "../component/Xbanner";
const TabPane = Tabs.TabPane;



class Xsmall extends Component {

  constructor(props){
    super(props);
    this.props= props;
    this.state = {
      mode: 'left'
    };
  }

  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  }
  
  render() {
    const { mode } = this.state;
    return (
      <div style={{ background: "#fff", width: "1200px", margin: "0 auto" }}>
        <Xbanner />
        <div className="index_personalbox">
          <span className="ms_ileft" id="location">
            当前位置：
            <a href="/index.htm">首页</a> &gt;
            <span className="blue" style={{ color: "#0072bd" }}>
              中小金融
            </span>
          </span>
        </div>

      <div>
        <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          {/* <Radio.Button value="top">Horizontal</Radio.Button> */}
          <Radio.Button value="left">Vertical</Radio.Button>
        </Radio.Group>
        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
          style={{ height: 1520 }}
        >
          <TabPane tab="中小民生工程" key="1">
          <div className="PubBox">
          <div className="ms_fl tith1">中小民生工程</div>
          <div className="count_table">
                    <div className="div_margin">
                        <p>
                            </p><div>
                                <div>
                                  <p>
                                    <img src="http://www.cmbc.com.cn/upload/images/2018/3/ae687809-2950-4f11-a7f6-0db4682e1b4b.jpg" title="ZXJR_20180328_中小金融科创贷.jpg" alt=""/>
                                    </p>
                                    <p style={{width: '629px',marginLeft:'4px',marginRight:'300px'}}>　　面向初创期至成长期的具备高新技术的优秀中小企业客户的多样化金融需求，中国民生银行开启了优秀高科技企业专属的“萤火计划”，开创了“民生桥●科创贷”产品系列。以投贷联动为抓手，通过“附转股条件的债权”、“附认股期权的债权”、“财务顾问”等产品，为中小企业提供投资、贷款、财务咨询、上市服务等一站式金融资本服务，提升资本中小企业实力，助推中小企业实现快速成长。民生桥●科创贷，银企投联，搭建成功。</p></div>
                                    <div style={{marginLeft:'800px',marginRight:'200px'}}>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_weibo.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qzon.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qzon.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qq.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_renren.png" alt=""/>
                                    </div>
                            <p></p>
                            </div>
                        
                    </div>
                    <div className="clear"></div>
          </div>
                <div className="clear"></div>
  

      </div>
          
          
          </TabPane>
          <TabPane tab="民生财运" key="2">
          <div className="PubBox">
          <div className="ms_fl tith1">民生财运</div>
          <div className="count_table">
                    <div className="div_margin">
                        <p>
                            </p><div>
                                <div>
                                  <p>
                                    <img src="http://www.cmbc.com.cn/upload/images/2018/3/ae687809-2950-4f11-a7f6-0db4682e1b4b.jpg" title="ZXJR_20180328_中小金融科创贷.jpg" alt=""/>
                                    </p>
                                    <p style={{width: '629px',marginLeft:'4px',marginRight:'300px'}}>　　民生“账户专列”，系列产品，综合服务,具备“快”、“准”、“灵”、“先”、“享”的五大特性。“快”，网络思维，业务流程处理快速，通过优化传统开户产品业务流程，开发线上“云账户”开户产品，为中小企业提供快捷、便利、专业的账户开户服务；“准”，深入挖掘中小企业客户需求，准确把握客户痛点，通过“智能账簿”、“行业收付通”、“跨行宝”等产品，满足客户对账户管理的要求；“灵”，贴近市场，产品收益灵活配置，以“流动利B/C/D/E”等财富管理产品，让中小企业的资金既能“钱生钱”，又能“随时用”；“先”，服务中小客户，结算客户优先享受贷款服务，打通中小企业从结算到贷款融资的专属VIP通道；“享”，行业首发中小企业专属产品，坐享稳定高收益。民生“账户专列”，中小企业专属的“复兴号”。</p></div>
                                    <div style={{marginLeft:'800px',marginRight:'200px'}}>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_weibo.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qzon.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qzon.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qq.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_renren.png" alt=""/>
                                    </div>
                            <p></p>
                            </div>
                        
                    </div>
                    <div className="clear"></div>
          </div>
                <div className="clear"></div>
  

      </div>
          
          </TabPane>
          <TabPane tab="账户专列" key="3">
          <div className="PubBox">
          <div className="ms_fl tith1">账户专列</div>
          <div className="count_table">
                    <div className="div_margin">
                        <p>
                            </p><div>
                                <div>
                                  <p>
                                    <b>账户专列

</b>
                                    </p>
                                    <p style={{width: '629px',marginLeft:'4px',marginRight:'300px'}}>　　民生“账户专列”，系列产品，综合服务,具备“快”、“准”、“灵”、“先”、“享”的五大特性。“快”，网络思维，业务流程处理快速，通过优化传统开户产品业务流程，开发线上“云账户”开户产品，为中小企业提供快捷、便利、专业的账户开户服务；“准”，深入挖掘中小企业客户需求，准确把握客户痛点，通过“智能账簿”、“行业收付通”、“跨行宝”等产品，满足客户对账户管理的要求；“灵”，贴近市场，产品收益灵活配置，以“流动利B/C/D/　中小企业民生企业家园是我行中小企业精英客群的专属服务、合作、交流平台。秉承既服务企业又服务企业家的理念，着眼于企业家服务，深化银企关系，实现企业价值和银行利益的双增值。

　　民生企业家园，让企业更佳！</p></div>
                                    <div style={{marginLeft:'800px',marginRight:'200px'}}>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_weibo.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qzon.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qzon.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qq.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_renren.png" alt=""/>
                                    </div>
                            <p></p>
                            </div>
                        
                    </div>
                    <div className="clear"></div>
          </div>
                <div className="clear"></div>
  

      </div>
          
          
          </TabPane>
          <TabPane tab="快捷贷" key="4">
          <div className="PubBox">
          <div className="ms_fl tith1">快捷贷</div>
          <div className="count_table">
                    <div className="div_margin">
                        <p>
                            </p><div>
                                <div>
                                  <p>
                                    <b>快捷贷

</b>
                                    </p>
                                    <p style={{width: '629px',marginLeft:'4px',marginRight:'300px'}}>　为满足中小企业急迫的资金需求，中国民生银行推出了“快捷贷”系列产品。率先在区域经济活跃的京津冀、长三角、珠三角、成渝经济区等地，推出了住房贷、厂房贷、商铺贷、担保贷、股票质押贷等相关产品，为企业提供灵活全面的融资服务。优化贷款审批流程，在资料齐全的情况下，将申请到审批的时间缩短至最多7个工作日，达到业界领先水平。民生快捷贷，简单快捷，“贷”动发展。</p></div>
                                    <div style={{marginLeft:'800px',marginRight:'200px'}}>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_weibo.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qzon.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qzon.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qq.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_renren.png" alt=""/>
                                    </div>
                            <p></p>
                            </div>
                        
                    </div>
                    <div className="clear"></div>
          </div>
                <div className="clear"></div>
  

      </div>
          
          </TabPane>
          <TabPane tab="科创贷" key="5">
          <div className="PubBox">
          <div className="ms_fl tith1">科创贷</div>
          <div className="count_table">
                    <div className="div_margin">
                        <p>
                            </p><div>
                                <div>
                                  <p>
                                    <b>科创贷

</b>
                                    </p>
                                    <p style={{width: '629px',marginLeft:'4px',marginRight:'300px'}}>　　民生“账户专列”，系列产品，综合服务,具备“快”、“准”、“灵”、“先”、“享”的五大特性。“快”，网络思维，业务流程处理快速，通过优化传统开户产品业务流程，开发线上“云账户”开户产品，为中小企业提供快捷、便利、专业的账户开户服务；“准”，深入挖掘中小企业客户需求，准确把握客户痛点，通过“智能账簿”、“行业收付通”、“跨行宝”等产品，满足客户对账户管理的要求；“灵”，贴近市场，产品收益灵活配置，以“流动利B/C/D/　中小企业民生企业家园是我行中小企业精英客群的专属服务、合作、交流平台。秉承既服务企业又服务企业家的理念，着眼于企业家服务</p></div>
                                    <div style={{marginLeft:'800px',marginRight:'200px'}}>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_weibo.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qzon.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qzon.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qq.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_renren.png" alt=""/>
                                    </div>
                            <p></p>
                            </div>
                        
                    </div>
                    <div className="clear"></div>
          </div>
                <div className="clear"></div>
  

      </div>
          
          </TabPane>
          <TabPane tab="民生企业家园" key="6"> <div className="PubBox">
          <div className="ms_fl tith1">科创贷</div>
          <div className="count_table">
                    <div className="div_margin">
                        <p>
                            </p><div>
                                <div>
                                  <p>
                                    <b>民生企业家园

</b>
                                    </p>
                                    <p style={{width: '629px',marginLeft:'4px',marginRight:'300px'}}>中小企业民生企业家园是我行中小企业精英客群的专属服务、合作、交流平台。秉承既服务企业又服务企业家的理念，着眼于企业家服务，深化银企关系，实现企业价值和银行利益的双增值。

　　民生企业家园，让企业更佳！</p></div>
                                    <div style={{marginLeft:'800px',marginRight:'200px'}}>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_weibo.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qzon.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qzon.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_qq.png" alt=""/>
                                      <img src="http://www.cmbc.com.cn/skin/cs/statics/images/big_renren.png" alt=""/>
                                    </div>
                            <p></p>
                            </div>
                        
                    </div>
                    <div className="clear"></div>
          </div>
                <div className="clear"></div>
  

      </div>
          </TabPane>
         
        </Tabs>
      </div> 



        
     
      <div className="rightheigt_boderheight" style={{position:'absolute',top:'540px',right:'270px'}}>
                            <h3 className="count_h3">服务渠道</h3>
                                  
                             <ul>
                                 
							      <li className="on_linebox">
							      							      <a target="_blank" href="/zdtj/bjfw/jy/wsyxdl/index.htm"><img src="http://www.cmbc.com.cn/skin/cs/statics/images/netbank.gif" className="right_img_1" alt=""/><img src="http://www.cmbc.com.cn/skin/cs/statics/images/netbank_hover.gif" className="right_img_2" alt=""/></a></li>
							        
                                    
							      <li className="on_linebox">
							      							      <a href="/dzyx/sjyx/index.htm"><img src="http://www.cmbc.com.cn/skin/cs/statics/images/phonebank_save.gif" className="right_img_1" alt=""/><img src="http://www.cmbc.com.cn/skin/cs/statics/images/phonebank_save_hover.gif" className="right_img_2" alt=""/></a></li>

							      <li className="on_linebox">
							       							      <a href="/dzyx/dhyx/ywjs/index.htm"><img src="http://www.cmbc.com.cn/skin/cs/statics/images/ms_tel.png" className="right_img_1" alt=""/><img src="http://www.cmbc.com.cn/skin/cs/statics/images/ms_tel_hover.png" className="right_img_2"  alt=""/></a></li>
							        
                                      
							      <li className="on_linebox">
							       							      <a href="/sy/lxwm/fwwd/index.htm"><img src="http://www.cmbc.com.cn/skin/cs/statics/images/net_conet.gif" className="right_img_1" alt=""/><img src="http://www.cmbc.com.cn/skin/cs/statics/images/net_conet_hover.gif" className="right_img_2"/></a></li>
							        
                                 
							      <li className="on_linebox">
							        							      <a href="/zdtj/bjfw/index.htm"><img style={{display:"block"}} src="http://www.cmbc.com.cn/skin/cs/statics/images/ms_online.png" className="right_img_1" alt=""/><img src="http://www.cmbc.com.cn/skin/cs/statics/images/ms_online_hover.png" className="right_img_2"  alt=""/></a></li>
                                 
                             </ul>
                       <div>
                            <ul>
                                 <li className="on_linebox"><a href="http://webchat.cmbc.com.cn:7001" target="_blank"><img src="http://www.cmbc.com.cn/skin/cs/statics/images/my_advice.gif" className="right_img_1" style={{display: 'inline'}}/><img src="http://www.cmbc.com.cn/skin/cs/statics/images/my_advice_hover.gif" className="right_img_2" style={{display: 'none'}} /></a></li>
                                 <li className="on_linebox"><a href="javascript:void(0)" id="suggest"><img src="http://www.cmbc.com.cn/skin/cs/statics/images/my_suggest.gif" className="right_img_1" style={{display: 'inline'}}/><img src="http://www.cmbc.com.cn/skin/cs/statics/images/my_suggest_hover.gif" className="right_img_2" style={{display: 'none'}} /></a></li>


                            
                            </ul>
	                       <div className="rigthyijian" style={{display: 'none'}}>
	       					 <p>
	         				   <span className="subsec ms_fl" style={{display: 'none'}}>提交成功！</span>
	         				   <input type="button" value="提交" className="xiaoqu_submit ms_fr" />	       					 </p>
	     				  </div>
                       </div>
                       </div>
     
      </div>
    );
  }
}
export default Xsmall;
