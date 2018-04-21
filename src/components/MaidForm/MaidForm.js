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
import { isNumber } from "util";
var parser = require('html2hscript');

class MaidForm extends React.Component {
  constructor() {
    super()
    this.state = {
      month: "",
      day: [],
      timeSlotSelected: "morning",  
      bedrooms: [],
      bathrooms: [],
      halfbaths: [],
      maidCost: [],
      carpetClean: false,
      ovenClean: false,
      woodFloorClean: false,
      laundry: false,
      windowClean: false,
      finalPrice: [],
      isMounted:false,
    };
  
    this.handleTimeSlot = this.handleTimeSlot.bind(this);
    this.calculateMaidCost = this.calculateMaidCost.bind(this);
    this.calculateMaidCost = this.calculateMaidCost.bind(this);
  }
  

  handleMonthsChange = e => {
    //   
  };


  handleDayPick = e => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.innerHTML);
    const dayContainer = e.target.innerHTML;

    parser(dayContainer, function(err, hscript) {
      var parseDayArr = [];
      console.log(hscript)
      const swingNum = hscript[19]

      if (swingNum == '"') {
        console.log("this is a single digit number");  
        parseDayArr.push(hscript[18]);
        var daySet = parseDayArr[0];
      } else {
        console.log("this is a double digit number");        
        parseDayArr.push(hscript[18]);
        parseDayArr.push(hscript[19]);
        var daySet = parseDayArr[0] += parseDayArr[1];        
      }
      console.log(daySet)
      // this.setState({ day: daySet});
    })
    
    console.log("DAY  ======= " + this.state.day);
  }
  handleTimeSlot(e, time, stateName) {
    this.setState({ timeSlotSelected: [time] })
  }



  handleChildChange = e => {
    // updates the input values on the MaidAddOns Form
    let value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: [value] });
    // console.log("Handle Input Changes: " + name + " = " + value);
  };
  handleChildCheckbox = e => {
    // updates the checkboxes in the MaidAddOns Form
    const name = e.target.name;
    this.setState({ [name]: !this.state[name] });
    // console.log("NAME: " + name + "  ||  VALUE: " + this.state[name]);
  };
  
  getValue = state => {
    // if the cleaning add on item has a box checked, this will give it a value of $10
    if (state) {return 10} else {return 0}
  }

  calculateMaidCost = () => {
    const startingRate = 45;
    const pricePerBedroom = 10;
    const pricePerBathroom = 10;
    const pricePerhalfBath = 5;

    const maidCost = this.state.maidCost;
    const bedrooms = this.state.bedrooms;
    const bathrooms = this.state.bathrooms;
    const halfbaths = this.state.bathrooms;
    const carpetClean = this.state.carpetClean;
    const ovenClean = this.state.ovenClean;
    const woodFloorClean = this.state.woodFloorClean;
    const laundry = this.state.laundry;
    const windowClean = this.state.windowClean;


    const calcBedroom = pricePerBedroom * bedrooms;
    const calcBathroom = pricePerBathroom * bathrooms;
    const calcHalfBath = pricePerhalfBath * halfbaths;
    const calcCarpetClean = this.getValue(carpetClean);
    const calcOvenClean = this.getValue(ovenClean);
    const calcWoodFloorClean = this.getValue(woodFloorClean);
    const calcLaundry = this.getValue(laundry);
    const calcWindowClean = this.getValue(windowClean);
    const caltTotal = startingRate + calcBedroom + calcBathroom + calcHalfBath + calcCarpetClean + calcOvenClean + calcWoodFloorClean + calcLaundry + calcWindowClean
    this.setState({ finalPrice: caltTotal.value })
    console.log("-------------------------------\n"
                + "Bedroom:      " + bedrooms + " $" + calcBedroom + "\n"
                + "Bathrooms:    " + bathrooms + " $" + calcBathroom +"\n"
                + "Halfbaths:    " + halfbaths + " $" + calcHalfBath + "\n"
                + "Deep Carpet Clean:    " + carpetClean + " $" + calcCarpetClean + "\n"
                + "Deep Oven Clean:      " + ovenClean + " $" + calcOvenClean + "\n"
                + "Hardwood Floor Clean: " + woodFloorClean + " $" + calcWoodFloorClean + "\n"
                + "Laundry:              " + laundry + " $" + calcLaundry + "\n"
                + "Window Clean:         " + windowClean + " $" + calcWindowClean + "\n"
                + "FINAL COST: $" + caltTotal + "\n"
                + "-------------------------------");
    console.log("Time Selected: " + this.state.timeSlotSelected)
    console.log("final Price $" + this.state.finalPrice);

  };

  componentDidMount = () => {
    console.log("Maid Form - componentDidMount");
  }

  goToSignup = event => {
    this.calculateMaidCost();
    // this.props.history.push(`/SuccessBooking`);

  };

  hanglePageChange = e => {
    console.log("++++++++++++++++++++++++++++  PAGE UPDATE  ++++++++++++++++++++++++++++");
    
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
  render() {
    return (
      <div onChange={this.hanglePageChange}>
        <Container style={{ width: "80%", margin: "30px" }}>
          <Form size="huge">
            <Header
              style={{ background: "#bec5fb", padded: "30px 10px" }}
              textAlign="center"
            >
              Cleaning Service
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
                <DayDropdown 
                  day={this.day}
                  handleDayPick={this.handleDayPick}
                />
              </Form.Field>
              <Form.Field>
                <label>Select Time Slot</label>
                <TimeSlotSelection 
                  size="huge" 
                  timeSlotSelected={this.state.timeSlotSelected}
                  handleTimeSlot={this.handleTimeSlot}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group grouped>
              <Form.Field inline>
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
                />
              </Form.Field>
            </Form.Group>
            <Grid columns="equal">
              <Grid.Column />
              <Grid.Column>
                <Button
                  onClick={this.goToSignup}
                  color="black"
                  size="big"
                  type="submit"
                >
                  Schedule Booking
                </Button>
              </Grid.Column>
              <Grid.Column />
            </Grid>
          </Form>
        </Container>
      </div>
    );
  };
}

export default MaidForm;
