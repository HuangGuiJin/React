import React, { Component } from "react";
// import Xperson from "../pages/Xperson";


class Xnav extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
        
         
          <li>
             
            <a className="nav_a" href="/Xperson">
              小微金融
            </a>
          </li>
          <li>
             
            <a className="nav_a" href="/Xerp">
              电子银行
            </a>
            
          </li>
          <li>
             
            <a className="nav_a" href="/Xpany">
              公司金融
            </a>
            
          </li>
          <li>
             
            <a className="nav_a" href="/Xsmall">
              中小金融
            </a>
            
          </li>
          <li>
             
            <a className="nav_a" href="/Xtrade">
              同业金融
            </a>
            
          </li>
         
          <li>
             
            <a className="nav_a" href="/Xpeople">
              今日民生
            </a>
           
          </li>
         
        </ul>
      </div>
    );
  }

}
export default Xnav;
