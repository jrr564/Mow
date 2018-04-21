import React, { Component } from "react";
import "./LandingPageCustomer.css";
import { Button  } from "semantic-ui-react";
import logo from './logo.svg';
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
import SimpleSlider from "./carousel.js";
import cnbc from "./cnbc.png";
import usaToday from "./usatoday.png";
import theGuardian from "./theguardian.png";
import Navbar from "../../components/Navbar/Navbar";
import LogIn from "../../components/LogIn/LogIn";
import Footer from "../../components/Footer/Footer";



class LandingPageCustomer extends React.Component {

    
    goToSignup = event => {
        this.props.history.push(`/SignUpCustomer/SignUpForm1`);
    }
  render() {
      return(
        

            <MuiThemeProvider>
     <div className="body">
     
      <div className="App">
      <Navbar RightItems={LogIn} />

{/* <div className = "iconmenu"> <IconMenuExampleSimple/> </div> */}

        
          
        <header className="App-header">
        <div className="upkeepLogo">
        </div>
          ç<h2 className="headerText">Lawn service and home cleaning done right.</h2>
          <div className="button1">
          <Button className="button" onClick={this.goToSignup} inverted color="green" backgroundColor = "Transparent"

      hoverColor="#8AA62F"
      label="Book Now"
style = {{
    margin: 20,
    height: 70,
    width: 800,
    marginLeft:400,
borderRadius : 3,
border : 0,
// padding : '0 30px',
boxShadow : '0 3px 5px 2px rgba(0, 0, 15, .30)'
}}/>
          <h2 className="callText">or give us a call at 866-421-UpKeep</h2>
       
          {/* <img src={grassScene} className="grassScene" style={{ margin:-120, marginTop:-1100,width:"auto"}} /> */}
          
          
           
           </div>
           <div className="rating">
            {/* <p>UpKeep is rated 5 out of 5 stars on Angie's List</p>          */}
             </div>
             <h4 className="text">5 out of 5 stars on Angie's List</h4>
             <img src={starRating} style={{ height: '20%', margin: 2}}  />
             <img src={starRating} style={{ height: '20%', margin: 2}}  />
             <img src={starRating} style={{ height: '20%', margin: 2}}  />
             <img src={starRating} style={{ height: '20%', margin: 2}}  />
             <img src={starRating} style={{ height: '20%', margin: 2}}  /> 
             
              <br />     
               <hr className="line" /> 
           <img src={forbes} style={{ height: '17%', margin: 10 }}  />
           <img src={cnbc} style={{ height: '17%', margin: 10 }}  />
           <img src={usaToday} style={{ height: '17%', margin: 10 }}  />
           <img src={theGuardian} style={{ height: '17%', margin: 10 }}  />
           
        
        </header>
        
        <div className="Container">
        <h1 className="row App-intro">
        
          
        </h1>
       
      </div>
      </div>
      
      <div classname="Grass">
      
      <img src={grass1} className="grass" style={{ margin:"auto", width:"auto", marginTop:500}} />
      </div>
      
      <div className="background1">
      <PaperExampleSimple />
      <div className="Container">
      <div className="row Customer-Choice">
       <div className="paperReview">
       
       
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
     <div className="rowReviews">
     <SimpleSlider/>
     
     </div>
     
     </div>
     </div>
     <Footer />
    </MuiThemeProvider>
    
    );
  }
}

export default LandingPageCustomer;
