import React, { Component } from "react";
import { Form, Checkbox } from "semantic-ui-react";

export default class TimeSlotSelection extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form.Group inline size="huge">
        <Form.Radio size="huge"
          label="Morning - 9am - 1pm"
          value="morning"
          checked={value === "morning"}
          onChange={this.handleChange}
        /> 
        <Form.Radio
        size="huge"
          label="Afternoon - 1pm - 6pm"
          value="afternoon"
          checked={value === "afternoon"}
          onChange={this.handleChange}
        />
      </Form.Group>
    );
  }
}
