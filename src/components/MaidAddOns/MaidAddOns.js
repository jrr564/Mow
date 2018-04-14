import React, { Component } from "react";
import { Form, Checkbox } from "semantic-ui-react";

export default class MaidAddOns extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <Form.Group grouped>
        <Form.Field label="Deep Carpet Clean" control="input" type="checkbox" />
        <Form.Field label="Deep Oven Clean" control="input" type="checkbox" />
        <Form.Field label="Hardwood Floor Clean" control="input" type="checkbox" />
        <Form.Field label="Laundry" control="input" type="checkbox" />
        <Form.Field label="Window Clean" control="input" type="checkbox" />

      </Form.Group>
    );
  }
}
