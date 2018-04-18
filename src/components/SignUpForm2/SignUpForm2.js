import React, { Component } from "react";
import "./SignUpForm2.css";
import {
  Button,
  Form,
  Container,
  Grid,
  Icon,
  Input,
  Segment
} from "semantic-ui-react";

class SignUpForm2 extends Component {
  state = {};

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => this.setState({ first: "", last: "" });

  render() {
    const { first, last, phone, address, city, zip } = this.state;

    return (
      <Container>
        <Segment style={{ padding: "2em 4em 2em 4em" }}>
          <Form size="large">
            <Form.Input
              label="First Name"
              name="first"
              value={first}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Last Name"
              name="last"
              value={last}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Phone Number"
              name="phone"
              value={phone}
              onChange={this.handleChange}
              width={10}
            />
            <Form.Input
              label="Address"
              name="address"
              value={address}
              onChange={this.handleChange}
            />
            <Form.Field>
              <label>State</label>
              <select class="ui fluid dropdown">
                <option value="">Texas</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </Form.Field>
            <Form.Input
              label="City"
              name="city"
              value={city}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Zip Code"
              name="zip"
              value={zip}
              onChange={this.handleChange}
            />
            <Grid centered columns={3}>
              <Grid.Column />
              <Grid.Column />
              <Grid.Column>
                <Button fluid size="big" type="submit">
                  Next <Icon name="right arrow" />
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default SignUpForm2;
