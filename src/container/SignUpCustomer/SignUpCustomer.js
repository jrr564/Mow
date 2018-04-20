import React from "react";
import "./SignUpCustomer.css";
import "../SignIn/SignIn.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import LogIn from "../../components/LogIn/LogIn";
import SignUpForm1 from "../../components/SignUpForm1/SignUpForm1";
import SignUpForm2 from "../../components/SignUpForm2/SignUpForm2";
import SignUpForm3Customer from "../../components/SignUpForm3Customer/SignUpForm3Customer";
import SignUpFormStep from "../../components/SignUpFormStep/SignUpFormStep";
import Footer from "../../components/Footer/Footer";
import { Image } from "semantic-ui-react";


const SignUpCustomer = () => (
  <div>
    <Navbar RightItems={LogIn} />
    <Image
      fluid
      className="animation-target"
      size="small"
      src="https://d30y9cdsu7xlg0.cloudfront.net/png/12106-200.png"
    />
    <div className="SignInTitle">
      <h1>
        <span>Welcome</span>
        <br />
        <span>to</span>
        <br /> UpKeep
      </h1>
    </div>
    <SignUpFormStep />
    <Switch>
      <Route path="/SignUpCustomer/SignUpForm1" component={SignUpForm1} />
      <Route path="/SignUpCustomer/SignUpForm2" component={SignUpForm2} />
      <Route
        path="/SignUpCustomer/SignUpForm3Customer"
        component={SignUpForm3Customer}
      />
    </Switch>
    <Footer />
  </div>
);

export default SignUpCustomer;
