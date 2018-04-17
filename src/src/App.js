import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./button.css";
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBarExampleIcon from './Navbar';
import {lightGreen600} from 'material-ui/styles/colors';
import BadgeExampleSimple from "./badge";
import IconMenuExampleSimple from "./iconmenu.js";
import RefreshIndicatorExampleLoading from "./refreshindicator.js"
import RaisedButtonExampleSimple from "./button.js"
import ListExampleSimple from "./whylist.js"
import PaperExampleSimple from "./paper.js"
import HorizontalLinearStepper from "./verticalLinestepper.js";
import PaperExampleSimple1 from "./paperSummary.js";
import PaperExampleSimple2 from "./paperReviews.js";
import forbes from "./forbes.jpeg";
import grass1 from "./grass1.png";
import headerText from "./headerText.svg";


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
     <div className="body">
      <div className="App">
    <AppBarExampleIcon iconClassNameLeft={BadgeExampleSimple}
color1 = {lightGreen600} />
{/* <div className = "iconmenu"> <IconMenuExampleSimple/> </div> */}


  
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="button1"><RaisedButtonExampleSimple/>
           <hr className="line" />
           </div>
           <img src={forbes} style={{ height: '15%', margin: 10 }}  />
           <img src={forbes} style={{ height: '15%', margin: 10 }}  />
           <img src={forbes} style={{ height: '15%', margin: 10 }}  />
           <img src={forbes} style={{ height: '15%', margin: 10 }}  />
           
          <h1 className="App-title">Welcome to Rea</h1>
        </header>
        
        <div className="Container">
        <h1 className="row App-intro">
          <img src={headerText} className="headerText" style={{marginTop: -100, height: 60}}/>
        </h1>
       <div classname="Grass">
      <img src={grass1} style={{ margin:0, width:"auto"}} />
      </div>
      </div>
      </div>
      
      <div className="Container">
      <div className="row Customer-Choice">
       
       <PaperExampleSimple />
    
     
      </div>
      </div>
      <div className="Container">
     <div className="row description">
      
     
     </div>
     
     </div>
     <div className="Container">
     <div className="row summary">
     <PaperExampleSimple1 />
     
     </div>
     
     </div>
     <div className="Container">
     <div className="row reviews">
     <PaperExampleSimple2  />
     
     </div>
     
     </div>
     </div>
    </MuiThemeProvider>
    
    );
  }
}

export default App;
