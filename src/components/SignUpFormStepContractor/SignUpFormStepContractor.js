import React, { Component } from "react";
import { Icon, Step, Image, Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class SignUpFormStepContractor extends Component {
  state = {};

  handleClick = (e, { title }) => this.setState({
    active: title,
  });
  
  render() {
    const { active } = this.state;
    const { form } = this.state;
    return (
      <Container>
        <Step.Group unstackable size="small" attached="top" widths={3}>
          <Link to="/SignUpContractor/SignUpForm1"><Step
            active={active === "Email"}
            icon="mail outline"
            link
            form="Form"
            onClick={this.handleClick}
            title="Email "
            description="Email Address and Password"
          /> </Link>
          <Link to="/SignUpContractor/SignUpForm2"><Step
            active={active === "Home Address"}
            icon="home"
            link
            onClick={this.handleClick}
            title="Home Address"
            description="Enter Your Home Address"
          /></Link>
          <Link to="/SignUpContractor/SignUpForm3Contractor"><Step
            active={active === "Banking"}
            icon="money"
            link
            onClick={this.handleClick}
            title="Banking"
            description="Enter Banking information"
          /></Link>  
        </Step.Group>
        </Container>
    );
  }
}
