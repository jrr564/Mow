import React, { Component } from "react";
import { Icon, Step, Image, Container, Responsive } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class SignUpFormStep extends Component {
  state = {};

  handleClick = (e, { title }) =>
    this.setState({
      active: title
    });

  render() {
    const { active } = this.state;
    const { form } = this.state;
    return (
      <Container attached style={{ margin: "40px 20px 20px" }}>
        <Step.Group
          unstackable
          attached
          textAlign="center"
          size="medium"
          fluid
          attached="top"
        >
          <Link to="/SignUpCustomer/SignUpForm1">
            <Step
              active={active === "Email"}
              form="Form"
              link
              onClick={this.handleClick}
              description="Email Address and Password"
            >
              <Step.Content>
                <Step.Title>
                  <Icon size="big" name="envelope" />Email
                </Step.Title>
                <Responsive as={Step.Description} minWidth={550}>
                Email Address and Password
                </Responsive>
              </Step.Content>
            </Step>
          </Link>
          <Link to="/SignUpCustomer/SignUpForm2">
            <Step
              active={active === "Home Address"}
              form="Form"
              link
              onClick={this.handleClick}
              description="Email Address and Password"
            >
              <Step.Content>
                <Step.Title>
                  <Icon size="big" name="home" />Address
                </Step.Title>
                <Responsive as={Step.Description} minWidth={550}>
                Enter Your Home Address
                </Responsive>
              </Step.Content>
            </Step>
          </Link>
          <Link to="/SignUpCustomer/SignUpForm3Customer">
            <Step
              active={active === "Billing"}
              form="Form"
              link
              onClick={this.handleClick}
              description="Email Address and Password"
            >
              <Step.Content>
                <Step.Title>
                  <Icon size="big" name="credit card" />Billing
                </Step.Title>
                <Responsive as={Step.Description} minWidth={550}>
                Enter Your Billing Information
                </Responsive>
              </Step.Content>
            </Step>
          </Link>
        </Step.Group>
      </Container>
    );
  }
}
