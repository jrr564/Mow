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
  
  handleChildChange = e => {
    // updates the input values on the MaidAddOns Form
    let value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
    console.log("Handle Input Changes: " + name + " = " + value);
  }

  //update the checkbox inputs on the MaidAddOns Form
  handleCarpetClean = () => {
    this.setState({
      carpetClean: !this.state.carpetClean
    });
    console.log("Carpet clean: " + this.state.carpetClean);
  }
  handleOvenClean = () => {
    this.setState({
      ovenClean: !this.state.ovenClean
    });
    console.log("Oven Clean: " + this.state.ovenClean);
  }
  handleWoodFloorClean = () => {
    this.setState({
      woodFloorClean: !this.state.woodFloorClean
    });
    console.log("Wood Floor Clean: " + this.state.woodFloorClean);
  }
  handleLaundry = () => {
    this.setState({
      laundry: !this.state.laundry
    });
    console.log("Laundry: " + this.state.laundry);
  }
  handleWindowClean = () => {
    this.setState({
      windowClean: !this.state.windowClean
    });
    console.log("Window Clean: " + this.state.windowClean);
  }



  calculateMaidCost = () => {
    const bedrooms = this.state.bedrooms;
    const bathrooms = this.state.bathrooms;
    const halfbaths = this.state.bathrooms;
  }

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

              handleCheckBox={this.handleCheckBox}

              handleCarpetClean={this.handleCarpetClean}
              handleOvenClean={this.handleOvenClean}
              handleWoodFloorClean={this.handleWoodFloorClean}
              handleLaundry={this.handleLaundry}
              handleWindowClean={this.handleWindowClean}

              initialChecked={this.state.carpetClean}
              callbackParent={this.onChildBoxChange}
            />
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
