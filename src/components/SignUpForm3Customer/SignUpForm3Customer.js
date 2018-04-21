import React, { Component } from "react";
import {
  Button,
  Container,
  Checkbox,
  Form,
  Grid,
  Icon,
  Input,
  Radio,
  Segment,
  Select,
  TextArea
} from "semantic-ui-react";

const options = [
  { key: "visa", text: "Visa", value: "Visa" },
  { key: "mastercard", text: "Mastercard", value: "Mastercard" },
  { key: "discover", text: "Discover", value: "Discover" },
  { key: "american", text: "American Express", value: "American Express" }
];

class SignUpForm3Customer extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Container>
         <Segment style={{ padding: "2em 4em 2em 4em" }}>
          <Form size="large">
            <Form.Group>
              <Form.Field
                width={12}
                control={Input}
                label="Card Number"
                placeholder="Card Number"
              />
            </Form.Group>
            <Form.Group inline>
              <Icon style={{ margin: "5px 5px" }} size="large" name="visa" />
              <Icon
                style={{ margin: "5px 5px" }}
                size="large"
                name="mastercard"
              />
              <Icon
                style={{ margin: "5px 5px" }}
                size="large"
                name="discover"
              />
              <Icon
                style={{ margin: "5px 5px" }}
                size="large"
                name="american express"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Select
                fluid
                options={options}
                label="Card Type"
                placeholder="Type"
              />

              <Form.Field control={Input} label="CVC" placeholder="CVC" />
              <Form.Field
                control={Input}
                label="Exp. Date"
                placeholder="xx/xx"
              />
            </Form.Group>
          </Form>
          <Grid centered columns={3}>
            <Grid.Column>
              <Button
                fluid
                padded
                className="centered"
                size="big"
                type="submit"
              >
                Submit
              </Button>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default SignUpForm3Customer;
