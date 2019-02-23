import React, { Component } from "react";
import axios from "axios";
import { Input } from 'antd';

class Reg extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      nameValue: "",
      pawValue: "",
      numValue: "",
      numinput: ""
    };
  }
  blurs(e) {
    this.state.numinput = e.target.value;

    if (this.state.numinput != this.state.numValue) {
      alert("验证码不正确，请重新输入");
    } else if (this.state.numinput == 0) {
      alert("请输入验证码");
    }
    console.log(this.state.numinput);
  }
  componentWillMount() {
    var random = new Array(
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "q",
      "e",
      "a",
      "d",
      "f",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      "l",
      "k",
      "j",
      "h",
      "g",
      "f",
      "d",
      "o",
      "i",
      "u",
      "y",
      "t",
      "r",
      "e",
      "w",
      "q",
      "s"
    );
    var num = "";
    for (var i = 0; i < 4; i++) {
      //设置随机数范围,这设置为0 ~ 36
      var fa = parseInt(Math.random() * 63);
      num += random[fa];
      // console.log(num);
    }
    this.state.numValue = num;
  }

  handValue(w) {
    // console.log(w.target.value);
    this.setState({
      nameValue: w.target.value
    });
  }
  handsValue(e) {
    // console.log(e.target.value);
    this.setState({
      pawValue: e.target.value
    });
  }

  regs() {
    var _this=this.state.numinput;
    axios
      .get("http://localhost:7001/insert", {
        params: {
          name: this.state.nameValue,
          password: this.state.pawValue
        }
      })
      .then(function(response) {
        console.log(_this)

        console.log(response.data);
        if (response.data) {
          if (_this == 0) {
            alert("请输入验证码");
          } else {
            alert("注册成功");
            alert("注册成功");
            window.location = "http://localhost:3000/Xlogin";
          }
        } else {
          alert("注册失败");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  //验证码
  codes(e) {
    var random = new Array(
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "q",
      "e",
      "a",
      "d",
      "f",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      "l",
      "k",
      "j",
      "h",
      "g",
      "f",
      "d",
      "o",
      "i",
      "u",
      "y",
      "t",
      "r",
      "e",
      "w",
      "q",
      "s"
    );
    var num = "";
    for (var i = 0; i < 4; i++) {
      //设置随机数范围,这设置为0 ~ 63
      var fa = parseInt(Math.random() * 63);
      num += random[fa];
      // console.log(num);
    }
    e.target.innerHTML = num;
    this.state.numValue = e.target.innerHTML;
    console.log(this.state.numValue);
  }

  render() {
    return (
      <div
        style={{
          width: "1200px",
          height: "450px",
          border: "1px solid #ccc",
          paddingLeft: "20px",
          paddingRight: "20px",
          background: "#fff",
          margin: "0 auto"
        }}
      >
        <h3
          style={{
            height: "66px",
            borderBottom: "1px solid #c2d0df",
            lineHeight: "66px",
            fontSize: "22px",
            color: "#666",
            fontWeight: "bold"
          }}
        >
          自助注册
        </h3>

        <ul style={{ height: "700px", marginLeft: "355px", marginTop: "50px" }}>
          <li style={{ marignTop: "20px", marginBottom: "20px" }}>
            <span
              style={{
                display: "inline-block",
                marginRight: "23px",
                width: "150px",
                height: "21px",
                textAlign: "right"
              }}
            >
              <label htmlFor={"bang1"}>用户名：</label>
            </span>
            <Input
              style={{
                width: "164px",
                height: "21px",
                // border: "1px solid #ccc",
                // paddingLeft: "4px"
              }}
              type="text"
              placeholder="请输入用户名"
              id={"bang1"}
              onChange={this.handValue.bind(this)}
              defaultValue={this.state.nameValue}
            />
          </li>
          <li style={{ marignTop: "20px", marginBottom: "20px" }}>
            <span
              style={{
                display: "inline-block",
                marginRight: "23px",
                width: "150px",
                height: "21px",
                textAlign: "right"
              }}
            >
              证件类型：
            </span>
            <select>
              <option value="身份证">身份证</option>
              <option value="护照">护照</option>
              <option value="士兵证">士兵证</option>
            </select>
          </li>
          <li style={{ marignTop: "20px", marginBottom: "20px" }}>
            <span
              style={{
                display: "inline-block",
                marginRight: "23px",
                width: "150px",
                height: "21px",
                textAlign: "right"
              }}
            >
              <label htmlFor={"bang2"}>证件号码：</label>
            </span>
            <Input
              style={{
                width: "164px",
                height: "21px",
                // border: "1px solid #ccc",
                // paddingLeft: "4px"
              }}
              placeholder="请输入证件号码"
              type="text"
              id={"bang2"}
            />
          </li>
          <li style={{ marignTop: "20px", marginBottom: "20px" }}>
            <span
              style={{
                display: "inline-block",
                marginRight: "23px",
                width: "150px",
                height: "21px",
                textAlign: "right"
              }}
            >
              <label htmlFor={"bang3"}>密码：</label>
            </span>
            <Input.Password
              style={{
                width: "164px"
                // height: "21px",
                // border: "1px solid #ccc",
                // paddingLeft: "4px"
              }}
              type="text"
              placeholder="请输入密码"
              id={"bang3"}
              onChange={this.handsValue.bind(this)}
              defaultValue={this.state.pawValue}
            />
          </li>
          <li style={{ marignTop: "20px", marginBottom: "20px" }}>
            <span
              style={{
                display: "inline-block",
                marginRight: "23px",
                width: "150px",
                height: "49px",
                textAlign: "right",
                verticalAlign: "bottom"
              }}
            >
              验证码：
            </span>
            <Input
              style={{
                width: "164px",
                height: "21px",
                // border: "1px solid #ccc",
                // paddingLeft: "4px",
                marginRight: "10px"
              }}
              type="text"
              placeholder="请输入验证码"
              onBlur={this.blurs.bind(this)}
              defaultValue={this.state.numinput}
            />
            <p
              style={{
                width: "100px",
                height: "49px",
                border: "1px solid #ccc",
                paddingLeft: "4px",
                background: "red",
                display: "inline-block",
                cursor: "pointer"
              }}
            >
              <span
                style={{
                  color: "yellow",
                  fontSize: "30px",
                  display: "inline-block",
                  height: "47px",
                  width: "87px",
                  textAlign: "center",
                  lineHeight: "40px"
                }}
                onClick={this.codes.bind(this)}
              >
                {this.state.numValue}
              </span>
            </p>
          </li>
          <button
            style={{
              marginTop: "18px",
              height: "37px",
              width: "269px",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
              textAlign: "center",
              color: "white",
              marginLeft: "74px",
              background: "#1890ff"
            }}
            onClick={this.regs.bind(this)}
          >
            注册
          </button>
        </ul>
      </div>
    );
  }
}

export default Reg;
