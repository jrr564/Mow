import React, { Component } from "react";
import { Icon, Step, Image } from "semantic-ui-react";

export default class SignUpFormStep extends Component {
  state = {};

  handleClick = (e, { title }) => this.setState({ active: title });

  render() {
    const { active } = this.state;

    return (
        <Step.Group attached="top" inverted>
          <Step
            active={active === "Email"}
            icon="mail outline"
            link
            onClick={this.handleClick}
            title="Email"
            description="Email Address and Password"
          />
          <Step
            active={active === "Home Address"}
            icon="home"
            link
            onClick={this.handleClick}
            title="Home Address"
            description="Enter Your Home Address"
          />
          <Step
            active={active === "Billing"}
            icon="credit card"
            link
            onClick={this.handleClick}
            title="Billing"
            description="Enter billing information"
          />
        </Step.Group>
    );
  }
}
