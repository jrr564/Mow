import React from "react";
import "./SignUpForm3Contractor.css";
import { Button, Form, Segment, Container } from "semantic-ui-react";

const SignUpForm3Contractor = () => (
  <div>
    <Container>
      <Segment>
        <Form>
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

          <Button size="huge" type="submit">
            Submit
          </Button>
        </Form>
      </Segment>
    </Container>
  </div>
);

export default SignUpForm3Contractor;
