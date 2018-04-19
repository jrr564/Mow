import React from "react";
import "./SignUpContractor.css";
import Navbar from "../../components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import LeftItems from "../../components/LeftItems/LeftItems";
import RightItems from "../../components/RightItems/RightItems";
import SignUpFormStepContractor from "../../components/SignUpFormStepContractor/SignUpFormStepContractor";
import SignUpForm1 from "../../components/SignUpForm1/SignUpForm1";
import SignUpForm2 from "../../components/SignUpForm2/SignUpForm2";
import SignUpForm3Contractor from "../../components/SignUpForm3Contractor/SignUpForm3Contractor";
import Footer from "../../components/Footer/Footer";

const SignUpContractor = () => (
  <div>
    <Navbar LeftItems={LeftItems} RightItems={RightItems} />
    <Container fluid>
      <SignUpFormStepContractor />
      <Switch>
        <Route path="/SignUpContractor/SignUpForm1" component={SignUpForm1} />
        <Route path="/SignUpContractor/SignUpForm2" component={SignUpForm2} />
        <Route
          path="/SignUpContractor/SignUpForm3Contractor"
          component={SignUpForm3Contractor}
        />
      </Switch>
    </Container>
    <Footer />
  </div>
);

export default SignUpContractor;
