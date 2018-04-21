import React, { Component } from "react";
import { Form, Checkbox, Radio } from "semantic-ui-react";


export default class TimeSlotSelection extends Component {
  state = {}
  // handleChange = (e) => this.props.handleTimeSlot(e);
  handleChange = (e, time, stateName) => {
    console.log(stateName + " = " + time);
    console.log(this.props.timeSlotSelected);

  }
  

  render() {
    const { value } = this.state;
    return (
      <Form.Group inline size="huge">
        <Form.Radio 
          size="huge"
          label="Morning - 9am - 1pm"
          value="morning"
          // checked={this.props.timeChecked === "this"}
          // onChange={this.handleChange(this) }
          onChange={ (e) => this.props.handleTimeSlot(e, "morning", "timeMorning") }
        /> 
        <Form.Radio
          size="huge"
          label="Afternoon - 1pm - 6pm"
          value="afternoon" 
          // checked={this.props.timeChecked === "this"}
          // onChange={this.handleChange}
          onChange={ (e) => this.props.handleTimeSlot(e, "afternoon", "timeAfternoon") }
        />
      </Form.Group>
    );
  }





}
