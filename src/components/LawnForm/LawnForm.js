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
import AddressForm from "../AddressForm/AddressForm";
import { BrowserRouter as Link } from "react-router-dom";
import axios from "axios";

class LawnForm extends React.Component {
  state = {
    month: "",
    date: [],
    treeTrimming: true,
    fertilizer: true,
    hedging: true,
    lotsize: "",
    address: "",
    city: "",
    state: ""
  };

  handleCheckbox = e => {
    const name = e.target.name;
    this.setState({ [name]: !this.state[name] });
    // console.log("NAME: " + name + "  ||  VALUE: " + this.state[name]);
  };

  callAPI = () => {
    const config = {
      headers: {
        //move to gitignore
        Accept: "application/json",
        apikey: "9d078487e223b1c4d54c3f3a3f628803"
      }
    };
    const addressURI = encodeURI(this.state.address);
    const url =
      "https://search.onboard-apis.com/propertyapi/v1.0.0/property/detail?" +
      "address1=" +
      addressURI +
      "&address2=" +
      this.state.city +
      "%2C%20" +
      this.state.state;

    axios.get(url, config).then(response => {
      this.setState({ lotsize: response.data.property[0].lot.lotsize1 });
      console.log(this.state.lotsize);
      this.calculateLawnCost();
      // allows the API to finish before routing.
      this.props.history.push(`/SuccessBooking`);
    });
  };

  getValue = state => {
    if (state) {return 10} else {return 0}
  }

  calculateLawnCost = () => {
    console.log(this.state.lotsize);
    const startingRate = 15;
    const lotsize = this.state.lotsize;
    const treeTrimming = this.state.treeTrimming;
    const fertilizer = this.state.fertilizer;
    const hedging = this.state.hedging;
    const calcTreeTrimming = this.getValue(treeTrimming);
    const calcFertilizer = this.getValue(fertilizer);
    const calcHedging = this.getValue(hedging);
    // const calcLotSize = lotsize
    
    console.log("Street: " + this.state.address + "\n"
                + "City: " + this.state.city + "\n"
                + "State: " + this.state.state);
  };

  hanleAddressInput = e => {
    const name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  goToSignup = event => {
    event.preventDefault();
    this.callAPI();
    // this.props.history.push(`/SuccessBooking`);   //move to callAPI for sync issues
  };

  hanglePageChange = e => {
    console.log("++++++++++++++++++++++++++++  PAGE UPDATE  ++++++++++++++++++++++++++++");
  }
  render() {
    return (
      <div onChange={this.hanglePageChange}>
        <Container style={{ width: "80%", margin: "30px" }}>
          <Form size="huge">
            <Header
              style={{ background: "#8ef0a8", padded: "30px 10px" }}
              textAlign="center"
            >
              Lawn Service
            </Header>
            <AddressForm 
              address={this.state.address}
              city={this.state.city}
              state={this.state.state}
              hanleAddressInput={this.hanleAddressInput}
            >
              Enter Address
            </AddressForm>
            <Grid columns="equal">
              <Grid.Column>
                <Form.Group inverted grouped>
                  <Form.Field inverted>
                    <label>Month</label>
                    <MonthDropdown />
                  </Form.Field>
                  <Form.Field>
                    <label>Date</label>
                    <DayDropdown />
                  </Form.Field>
                  <Form.Field style={{ textAlign: "center" }}>
                    <h1>Select Time Slot</h1>
                    <TimeSlotSelection size="huge" />
                  </Form.Field>
                </Form.Group>
              </Grid.Column>
              <Grid.Column>
                <Form.Group grouped>
                  <Form.Field inline>
                    <LawnAddOns
                      size="huge"
                      treeTrimming={this.state.treeTrimming}
                      fertilizer={this.state.fertilizer}
                      hedging={this.state.hedging}
                      handleCheckbox={this.handleCheckbox}
                    />
                  </Form.Field>
                </Form.Group>
              </Grid.Column>
            </Grid>
            <Grid columns="equal">
              <Grid.Column />
              <Grid.Column>
                <Button
                  onClick={this.goToSignup}
                  color="black"
                  bold
                  size="large"
                  type="submit"
                >
                  Schedule Booking
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        </Container>
      </div>
    );
  }
}

export default LawnForm;
