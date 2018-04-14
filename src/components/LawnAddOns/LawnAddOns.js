import React, { Component } from "react";
import { Form, Checkbox } from "semantic-ui-react";

export default class LawnAddOns extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <Form.Group grouped>
        <Form.Field label="Tree Trimming" control="input" type="checkbox" />
        <Form.Field label="Fertilizer" control="input" type="checkbox" />
        <Form.Field label="Hedging" control="input" type="checkbox" />
      </Form.Group>
    );
  }
}
