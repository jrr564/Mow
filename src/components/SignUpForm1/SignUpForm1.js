import React, { Component } from "react";
import "./SignUpForm1.css";
import {
  Button,
  Form,
  Checkbox,
  Container,
  Grid,
  Input,
  Segment
} from "semantic-ui-react";

class SignUpForm1 extends Component {
  state = {};

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => this.setState({ first: "", last: "" });

  render() {
    const { email, password } = this.state;

    return (
      <Container>
         <Segment style={{ padding: "2em 4em 2em 4em" }}>
          <Form size="large">
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
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Grid centered columns={3}>
              <Grid.Column>
                <Button
                
                  size="big"
                  type="submit"
                > Create Account
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default SignUpForm1;
