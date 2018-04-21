import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

// import SignUpFormStep from "./components/SignUpFormStep/SignUpFormStep";
// import SignUpForm1 from "./components/SignUpForm1/SignUpForm1";
// import SignUpForm2 from "./components/SignUpForm2/SignUpForm2";
// import SignUpForm3Customer from "./components/SignUpForm3Customer/SignUpForm3Customer";
// import SignUpForm3Contractor from "./components/SignUpForm3Contractor/SignUpForm3Contractor";
// import ServiceReviewModalCustomer from "./components/ServiceReviewModalCustomer/ServiceReviewModalCustomer";
// import ServiceReviewModalContractor from "./components/ServiceReviewModalContractor/ServiceReviewModalContractor";
import BookService from "./container/BookService/BookService";
import NoMatch from "./container/NoMatch/index";
import ContractorAccount from "./container/ContractorAccount/ContractorAccount";
import CustomerAccount from "./container/CustomerAccount/CustomerAccount";
import SuccessBooking from "./container/SuccessBooking/SuccessBooking";
import SignUpContractor from "./container/SignUpContractor/SignUpContractor";
import SignUpCustomer from "./container/SignUpCustomer/SignUpCustomer";
import LandingPageCustomer from "./container/LandingPageCustomer/LandingPageCustomer";
import SignIn from "./container/SignIn/SignIn";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component ={LandingPageCustomer} />
        <Route exact path="/BookService" component={BookService} />
        <Route path="/BookService/" component={BookService} />
        <Route exact path="/ContractorAccount" component={ContractorAccount} />
        <Route path="/CustomerAccount" component={CustomerAccount} />
        <Route path="/SignIn" component={SignIn} />
        <Route exact path="/SignUpCustomer" component={SignUpCustomer} />
        <Route path="/SignUpCustomer/:form" component={SignUpCustomer} />
        <Route exact path="/SignUpContractor" component={SignUpContractor} />
        <Route path="/SignUpContractor/:form" component={SignUpContractor} />
        <Route exact path="/SuccessBooking" component={SuccessBooking} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
