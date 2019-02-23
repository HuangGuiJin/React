import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Xheader from './component/Xheader';
import Xnav from './component/Xnav';
import Xbc from './component/Xbc';
import Xfooter from './component/Xfooter';
import Xfooterplus from './component/Xfooterplus';
import Xperson from "./pages/Xperson"
import Xerp from "./pages/Xerp";
import Xpany from "./pages/Xpany";
import Xsmall from "./pages/Xsmall";
import Xtrade from './pages/Xtrade';
import Xpeople from './pages/Xpeople';
import Xlogin from "./pages/Xlogin";
import Xreg from "./pages/Xreg";


class App extends Component {
  constructor(props){
    super(props)
    this.props=props
}


  render() {
    return (
      <div className="App">
        <div>


          <Xheader/>
          <Xnav />
          <Router>
            <div>
             <li>
               <Link to="/"></Link>
               
             </li>
              <Route exact path="/" component={Xbc} />
              <Route path="/Xperson" component={Xperson} />
              <Route path="/Xerp" component={Xerp} />
              <Route path="/Xpany" component={Xpany} />
              <Route path="/Xsmall" component={Xsmall} />
              <Route path="/Xtrade" component={Xtrade} />
              <Route path="/Xpeople" component={Xpeople} />
              <Route path="/Xlogin" component={Xlogin}/>
              <Route path="/Xreg" component={Xreg}/>
            
            </div>
          </Router>
          
          <Xfooter />
          <Xfooterplus />

          </div>
        

      </div>
    );
  }
}

export default App;
