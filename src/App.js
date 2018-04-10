import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import LeftItems from "./components/LeftItems/LeftItems";
import RightItems from "./components/RightItems/RightItems";
import SignUpFormStep from "./components/SignUpFormStep/SignUpFormStep";
import SignUpForm1 from "./components/SignUpForm1/SignUpForm1";
import SignUpForm2 from "./components/SignUpForm2/SignUpForm2";
import SignUpForm3Customer from "./components/SignUpForm3Customer/SignUpForm3Customer";
import SignUpForm3Contractor from "./components/SignUpForm3Contractor/SignUpForm3Contractor";
import ServiceReviewModalCustomer from "./components/ServiceReviewModalCustomer/ServiceReviewModalCustomer";
import ServiceReviewModalContractor from "./components/ServiceReviewModalContractor/ServiceReviewModalContractor";
import Footer from "./components/Footer/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar LeftItems={LeftItems} RightItems={RightItems} />
        <Segment>
          <SignUpFormStep />
          <SignUpForm1 />
          <SignUpForm2 />
          <SignUpForm3Customer/>
          <SignUpForm3Contractor/>
        </Segment>
        <ServiceReviewModalCustomer/>
        <ServiceReviewModalContractor/>
        <Footer/>
      </div>
    );
  }
}

export default App;
