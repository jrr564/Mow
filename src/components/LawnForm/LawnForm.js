import React, { Component } from "react";
import "./LawnForm.css";
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
import LawnAddOns from "../LawnAddOns/LawnAddOns";
import { BrowserRouter as Link } from "react-router-dom";

class LawnForm extends React.Component {
  state = {
    month: "",
    date: [],
    treeTrimming: true,
    fertilizer: true,
    hedging: true,
  }

  handleCheckbox = e => {
    const name = e.target.name;

    this.setState({
      [name]: !this.state[name]
    });
    console.log("NAME: " + name + "  ||  VALUE: " + this.state[name]);
  }

  goToSignup = event => {
    this.props.history.push(`/SuccessBooking`);
  };
  render() {
    return (
      <div>
        <Container style={{ width: "80%", margin: "30px" }}>
          <Form size="huge">
            <Header textAlign="center" inverted color="green">
              Lawn Service
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
                <LawnAddOns 
                  size="huge" 
                  treeTrimming={this.state.treeTrimming}
                  fertilizer={this.state.fertilizer}
                  hedging={this.state.hedging}
                  handleCheckbox={this.handleCheckbox}
                />
              </Form.Field>
            </Form.Group>

            <Grid columns="equal">
              <Grid.Column />
              <Grid.Column>
                  <Button onClick={this.goToSignup} color="green" size="huge" type="submit">
                    Schedule Booking
                  </Button>
              </Grid.Column>
              <Grid.Column />
            </Grid>
          </Form>
        </Container>
      </div>
    );
  }
}

export default LawnForm;
