import React, { Component } from "react";
import axios from "axios";
import { message, Button } from 'antd';
import { Input } from 'antd';

class Login extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      nValue: "",
      pValue: ""
    };
  }
  
  onChange(e) {
    console.log(e)
    this.setState({
      nValue: e.target.value
    });
  }
  hansValue(q) {
    // console.log(q.target.value)
    this.setState({
      pValue: q.target.value
    });
  }
 

  success() {
    var nValue1 = this.state.nValue;
    var pValue1 = this.state.pValue;
    // console.log(nValue1);
    axios
      .get("http://localhost:7001/find")
      .then(function(response) {
        var data = response.data.data1[0];
        if (data.name == nValue1 && data.password == pValue1) {
          message
            .loading("登录中...", 2.5)
            .then(() =>
              message.success(('登录成功',2.5,window.location = "http://localhost:3000"))
            ); 

        } else {
          alert("请确认用户名或密码");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        <div style={{ width: "1200px", margin: "0 auto" }}>
          <img
            style={{ height: "568px", width: "1200px" }}
            src="https://mkt.cmbc.com.cn/advimages/LoginImg.jpg"
            alt=""
          />
        </div>

        <div
          style={{
            width: "323px",
            height: "400px",
            background: "#fff",
            position: "absolute",
            bottom: "79px",
            right: "240px",
            padding: "20px"
          }}
        >
          <p
            style={{ marginTop: "40px", fontSize: "14px", paddingLeft: "4px" }}
          >
            登录
          </p>
          <Input 
            style={{
              width: "269px",
              height: "37px",
            
            }}
            type="text"
            allowClear
            placeholder="请输入用户名"
            onChange={this.onChange.bind(this)}
            defaultValue={this.state.nValue}
          />
          <p
            style={{ marginTop: "13px", fontSize: "14px", paddingLeft: "4px" }}
          >
            密码
          </p>
          <Input.Password
            style={{
              
              width: "269px",
              height: "37px"
            }}
            type="password"
            placeholder="请输入密码"
            onChange={this.hansValue.bind(this)}
            defaultValue={this.state.pValue}
          />
          <Button 
            style={{
              marginTop: "18px",
              height: "37px",
              width: "269px",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
              textAlign: "center",
              color: "white",
              background: "#1890ff"
            }}
            onClick={this.success.bind(this, this.state.nValue)}
          >
            登录
          </Button >
          <ul style={{ marginTop: "8px" }}>
            <li style={{ float: "left", marginRight: "5px" }}>
              <a style={{ color: "#1890ff" }} href="">
                忘记密码
              </a>
            </li>
            <li style={{ float: "left", marginRight: "5px" }}>
              <a style={{ color: "#1890ff" }} href="/Xreg">
                自助注册
              </a>
            </li>
            <li style={{ float: "left", marginRight: "5px" }}>
              <a style={{ color: "#1890ff" }} href="">
                网银助手
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Login;
