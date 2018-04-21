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
import grassScene from "./grassScene.png";
import starRating from "./starRating.svg";

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
          <img src={logo} className="App-logo" alt="logo" style={{margin: 0}}/>
          <div className="button1"><RaisedButtonExampleSimple/>
          {/* <img src={grassScene} className="grassScene" style={{ margin:-120, marginTop:-1100,width:"auto"}} /> */}
          
           <hr className="line" />
           
           </div>
           <div className="rating">
            {/* <p>UpKeep is rated 5 out of 5 stars on Angie's List</p>          */}
             </div>
             <img src={starRating} style={{ height: '20%', margin: 2}}  />
             <img src={starRating} style={{ height: '20%', margin: 2}}  />
             <img src={starRating} style={{ height: '20%', margin: 2}}  />
             <img src={starRating} style={{ height: '20%', margin: 2}}  />
             <img src={starRating} style={{ height: '20%', margin: 2}}  />
              <br />      
           <img src={forbes} style={{ height: '15%', margin: 10 }}  />
           <img src={forbes} style={{ height: '15%', margin: 10 }}  />
           <img src={forbes} style={{ height: '15%', margin: 10 }}  />
           <img src={forbes} style={{ height: '15%', margin: 10 }}  />
           
          <h1 className="App-title">Welcome to Rea</h1>
        </header>
        
        <div className="Container">
        <h1 className="row App-intro">
        
          <img src={headerText} className="headerText" style={{marginTop: -10, height: 70, margin: 0}}/>
        </h1>
       
      </div>
      </div>
      
      <div classname="Grass">
      
      <img src={grass1} className="grass" style={{ margin:"auto", width:"auto", marginTop:200}} />
      </div>
      
      <div className="background1">
      <div className="Container">
      <div className="row Customer-Choice">
       <div className="paperReview">
       <PaperExampleSimple />
      </div>
     
      </div>
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
