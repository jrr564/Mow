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
  state = {
    month: "",
    date: [],
    bedrooms: [],
    bathrooms: [],
    halfbaths: [],
    maidCost: [],
    // if you remane the variables below, you will also rename the checkbox attr name on the MaidAddOns form
    carpetClean: true,
    ovenClean: true,
    woodFloorClean: true,
    laundry: true,
    windowClean: true,
  }

  handleMonthsChange = e => {

  }

  
  handleChildChange = e => {
    // updates the input values on the MaidAddOns Form
    let value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
    console.log("Handle Input Changes: " + name + " = " + value);
  }
  handleChildCheckbox = e => {
    // updates the checkboxes in the MaidAddOns Form
    const name = e.target.name;
    
    this.setState({
      [name]: !this.state[name]
    })
    console.log("NAME: " + name + "  ||  VALUE: " + this.state[name]);
  }



  calculateMaidCost = () => {
    const maidCost = this.state.maidCost
    const bedrooms = this.state.bedrooms;
    const bathrooms = this.state.bathrooms;
    const halfbaths = this.state.bathrooms;

    var newCost = maidCost.slice();
    newCost.push(bedrooms);
    this.setState({ maidCost:newCost })    
    console.log("Maid Cost " + maidCost)
  }

  goToSignup = event => {
    // this.calculateMaidCost();
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
            <MonthDropdown 
              month={this.state.month}
              handleMonthsChange={this.handleMonthsChange}
            />
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
            <MaidAddOns 
              size="huge" 
              bedrooms={this.state.bedrooms}
              bathrooms={this.state.bathrooms}
              halfbaths={this.state.halfbaths}
              carpetClean={this.state.carpetClean}
              ovenClean={this.state.ovenClean}
              woodFloorClean={this.state.woodFloorClean}
              laundry={this.state.laundry}
              windowClean={this.state.windowClean}

              handleChildChange={this.handleChildChange}

              handleChildCheckbox={this.handleChildCheckbox}

              handleCarpetClean={this.handleCarpetClean}
              handleOvenClean={this.handleOvenClean}
              handleWoodFloorClean={this.handleWoodFloorClean}
              handleLaundry={this.handleLaundry}
              handleWindowClean={this.handleWindowClean}
            />
          </Form.Field>
        </Form.Group>
        <Grid columns="equal">
          <Grid.Column />
          <Grid.Column>
              <Button   
                onClick={this.goToSignup} 
                color="blue"  
                size="huge" 
                type="submit">
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
