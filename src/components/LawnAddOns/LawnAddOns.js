import React, { Component } from "react";
import { Form, Checkbox } from "semantic-ui-react";

export default class LawnAddOns extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <Form.Group grouped>
        <Form.Field 
          label="Tree Trimming" 
          control="input" 
          type="checkbox" 
          name="treeTrimming"
          defaultChecked={false}
          value={this.props.treeTrimming}
          onClick={this.props.handleCheckbox}
        />
        <Form.Field 
          label="Fertilizer" 
          control="input" 
          type="checkbox" 
          name="fertilizer"
          defaultChecked={false}
          value={this.props.fertilizer}
          onClick={this.props.handleCheckbox}        
        />
        <Form.Field 
          label="Hedging" 
          control="input" 
          type="checkbox" 
          name="hedging"
          defaultChecked={false}
          value={this.props.hedging}
          onClick={this.props.handleCheckbox}                    
        />
      </Form.Group>
    );
  }
}
