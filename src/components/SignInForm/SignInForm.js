import React, { Component } from "react";
import "./SignInForm.css";
import {
  Button,
  Form,
  Checkbox,
  Container,
  Grid,
  Icon,
  Input,
  Segment
} from "semantic-ui-react";

class SignInForm extends React.Component {
  state = {};
  goToAccount = event => {
    event.preventDefault();
    this.props.history.push(`/CustomerAccount`);
  };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    const { email, password } = this.state;

    return (
      <div style={{ margin: "40px 60px 40px" }}>
        <Container style={{width: "90%"}}>
          <Segment attached style={{ background: "whitesmoke" }} fluid size="big" textAlign="center" as="h1">
            Log-In
          </Segment>
          <Segment attached style={{ padding: "2em 8em 2em 8em" }}>
            <Form onSubmit={this.goToAccount} size="large">
              <Form.Input
                label="Email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Password"
                name="Password"
                value={password}
                onChange={this.handleChange}
              />
              <Grid centered columns="equal">
                <Grid.Column>
                  <Button href="/CustomerAccount" size="big" type="submit">
                    {" "}
                    Log In
                  </Button>
                </Grid.Column>
              </Grid>
            </Form>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default SignInForm;
