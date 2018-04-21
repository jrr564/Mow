import React, { Component } from "react";
import {
  Button,
  Form,
  Container,
  Grid,
  Input,
  Segment,
  Header
} from "semantic-ui-react";
import TimeSlotSelection from "../TimeSlotSelection/TimeSlotSelection";
import MonthDropdown from "../MonthDropdown/MonthDropdown";
import DayDropdown from "../DayDropdown/DayDropdown";
import MaidAddOns from "../MaidAddOns/MaidAddOns";
import { BrowserRouter as Link } from "react-router-dom";

class MaidForm extends React.Component {
  goToSignup = event => {
    this.props.history.push(`/SuccessBooking`);
}
  render() {
    return(
  <div>
    <Container style={{ width: "80%", margin: "30px" }}>
      <Form size="huge">
        <Header textAlign="center" color="blue">
          Maid Service
        </Header>
        <Form.Group grouped>
          <Form.Field>
            <label>Month</label>
            <MonthDropdown />
          </Form.Field>
          <Form.Field>
            <label>Date</label>
            <DayDropdown />
          </Form.Field>
          <Form.Field>
            <label>Select Time Slot</label>
            <TimeSlotSelection size="huge" />
          </Form.Field>
        </Form.Group>
        <Form.Group grouped>
          <Form.Field inline>
            <label>Add Ons (Extra Charges Apply)</label>
            <MaidAddOns size="huge" />
          </Form.Field>
        </Form.Group>
        <Grid columns="equal">
          <Grid.Column />
          <Grid.Column>
              <Button onClick={this.goToSignup} color="blue" bold size="huge" type="submit">
                Schedule Booking
              </Button>
          </Grid.Column>
          <Grid.Column />
        </Grid>
      </Form>
    </Container>
  </div>
    )
  }
}

export default MaidForm;
