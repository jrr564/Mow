import React from "react";
import "./SignUpForm3Contractor.css";
import { Button, Form, Segment } from "semantic-ui-react";

const SignUpForm3Contractor = () => (
  <div>
    <Segment inverted>
      <Form inverted>
        <Form.Field>
          <label>Company Name</label>
          <input />
        </Form.Field>
        <Form.Field>
          <label>Bank Account Number</label>
          <input />
        </Form.Field>
        <Form.Field>
          <label>Routing Number</label>
          <input />
        </Form.Field>

        <Button inverted size="huge" type="submit">
          Submit
        </Button>
      </Form>
    </Segment>
  </div>
);

export default SignUpForm3Contractor;
