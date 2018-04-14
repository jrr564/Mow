import React from "react";
import "./LawnForm.css";
import {
  Button,
  Form,
  Container,
  Input,
  Segment,
  Header
} from "semantic-ui-react";
import TimeSlotSelection from "../TimeSlotSelection/TimeSlotSelection";
import MonthDropdown from "../MonthDropdown/MonthDropdown";
import DayDropdown from "../DayDropdown/DayDropdown";
import LawnAddOns from "../LawnAddOns/LawnAddOns";

const LawnForm = () => (
  <div>
    <Container style={{width: "80%", margin: "30px"}}>
      <Form size="huge">
        <Header>Book Lawn Service</Header>
        <Form.Group grouped >
          <Form.Field >
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
            <LawnAddOns size="huge" />
          </Form.Field>
        </Form.Group>

        <Button bold size="huge" type="submit">
          Schedule Booking
        </Button>
      </Form>
    </Container>
  </div>
);

export default LawnForm;
