import React from "react";
import "./SignUpForm3Contractor.css";
import { Button, Form, Grid, Segment, Container } from "semantic-ui-react";

const SignUpForm3Contractor = () => (
  <div>
    <Container>
      <Segment style={{ padding: "2em 4em 2em 4em" }}>
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
          <Grid centered columns={3}>
            <Grid.Column>
              <Button fluid size="huge" type="submit">
                Submit
              </Button>
            </Grid.Column>
          </Grid>
        </Form>
      </Segment>
    </Container>
  </div>
);

export default SignUpForm3Contractor;
