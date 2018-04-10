import React from "react";
import "./SignUpForm1.css";
import { Button, Segment, Checkbox, Form, Container, Message } from "semantic-ui-react";

const SignUpForm1 = () => (
  <div>
    <Segment style={{ padding: '1em 10em' }} inverted>
      <Form inverted>
        <Form.Input label="Email"/>
        <Form.Field>
          <label >Password</label>
          <input />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button inverted size="huge" type="submit">Create Account</Button>
      </Form>
    </Segment>
  </div>
);

export default SignUpForm1;
