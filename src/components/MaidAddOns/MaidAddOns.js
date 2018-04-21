import React, { Component } from "react";  
import { Form, Checkbox, Input } from "semantic-ui-react";

export default class MaidAddOns extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <Form.Group grouped>
      <br/>
        <Form.Field 
          label="Number of Bedrooms"
          control="input"
          type="number"
          name="bedrooms"
          max={10}
          value={this.props.bedrooms}
          onChange={this.props.handleChildChange}
        />
        <Form.Field 
          label="Number of Bathrooms"
          control="input"
          type="number"
          name="bathrooms"
          max={10}
          value={this.props.bathrooms}
          onChange={this.props.handleChildChange}
        />
        <Form.Field 
          label="Number of Halfbaths"
          control="input"
          type="number"
          name="halfbaths"
          max={10}
          value={this.props.halfbaths}
          onChange={this.props.handleChildChange}
        />

        {/* ---------------- Checkbox ---------------- */}
        <Form.Field 
          label="Deep Carpet Clean" 
          control="input" 
          type="checkbox" 
          name="carpetClean"
          // defaultChecked={false}  
          value={this.props.carpetClean} 
          onClick={this.props.handleChildCheckbox}
        />
        <Form.Field 
          label="Deep Oven Clean" 
          control="input" 
          type="checkbox" 
          name="ovenClean"        
          defaultChecked={false}  
          value={this.props.ovenClean}
          onClick={this.props.handleChildCheckbox}  
        />
        <Form.Field 
          label="Hardwood Floor Clean" 
          control="input" 
          type="checkbox" 
          name="woodFloorClean"
          defaultChecked={false}  
          value={this.props.woodFloorClean}
          onChange={this.props.handleChildCheckbox}
        />
        <Form.Field 
          label="Laundry" 
          control="input" 
          type="checkbox" 
          name="laundry"
          defaultChecked={false}  
          value={this.props.laundry}
          onClick={this.props.handleChildCheckbox}
        />
        <Form.Field 
          label="Window Clean" 
          control="input" 
          type="checkbox" 
          name="windowClean"
          defaultChecked={false}  
          value={this.props.windowClean}
          onClick={this.props.handleChildCheckbox}
        />

      </Form.Group>
    );
  }
}
