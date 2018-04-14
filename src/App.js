import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import logo from "./logo.svg";
import "./App.css";

// import SignUpFormStep from "./components/SignUpFormStep/SignUpFormStep";
// import SignUpForm1 from "./components/SignUpForm1/SignUpForm1";
// import SignUpForm2 from "./components/SignUpForm2/SignUpForm2";
// import SignUpForm3Customer from "./components/SignUpForm3Customer/SignUpForm3Customer";
// import SignUpForm3Contractor from "./components/SignUpForm3Contractor/SignUpForm3Contractor";
// import ServiceReviewModalCustomer from "./components/ServiceReviewModalCustomer/ServiceReviewModalCustomer";
// import ServiceReviewModalContractor from "./components/ServiceReviewModalContractor/ServiceReviewModalContractor";
import SuccessBooking from "./container/SuccessBooking/SuccessBooking";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SuccessBooking/>
      </div>
    );
  }
}

export default App;
