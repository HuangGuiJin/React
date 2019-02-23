import React, { Component } from "react";
import { Input } from 'antd';

const Search = Input.Search;
class Xheader extends Component {
  render() {
    return (
      <div className=".con header" style={{background:'#fff',width:'1200px',margin:'0 auto'}}>
        <div className="logo">
          <a href="/">
            <img src="../images/d.jpg" alt="" />
          </a>
        </div>
        <div className="header_right">
          <div className="header_right_1">
            <ul>
              <li className="home_icon">
                <a
                  href="##"
                  style={{ border: "0" }}
                > </a>
              </li>
              <li className="home_icon_fan">
                <a
                  style={{ border: "0" }}
                  href="##"
                >
                  繁
                </a>
              </li>
              <li className="border_none">
                <a
                  style={{ border: "0" }}
                  href="##"
                >
                  En
                </a>
              </li>
            </ul>
            <div className="tel_icon">95568</div>
          </div>
          <div className="header_right_2">
            <div className="search01">
              <form id="searchForm" action="/search/search.do" method="get">
      

<Search
      placeholder="请输入关键字" className="search_text"
      id="q"
      onSearch={value => console.log(value)}
      enterButton style={{top: '-4px',left:'-15px'}}
    />
              </form>
            </div>
            <div className="phone_search">
              <a href="##"> </a>
            </div>
          </div>
          <div className="header_right_3">
            <a href="/Xlogin" className="header_login_menu">
              网上银行登录
            </a>
            
          </div>
        </div>
      </div>
    );
  }
}
export default Xheader;
