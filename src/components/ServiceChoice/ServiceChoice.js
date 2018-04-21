import React from "react";
import { Button, Container, Grid, Segment } from "semantic-ui-react";
import "./ServiceChoice.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const ServiceChoice = () => {
  return (
    <div>
      <div style={{ margin: "100px 60px 10px"}}>
        <Segment basic color="white" padded size="large" textAlign="center" as="h1">
          What would you like to schedule?
        </Segment>
    </div>
    <div class="ui center aligned segment" style={{border: "white"}}>
            <Button.Group size="huge">
              <Link to="/BookService/MaidForm">
                <Button style={{ background: "#bec5fb"}} color="white">Cleaning Service</Button>
              </Link>
              <Button.Or color="black"/>
              <Link to="/BookService/LawnForm">
                <Button style={{ background: "#8ef0a8"}} color="white">Lawn Service</Button>
              </Link>
            </Button.Group>
      </div>
    </div>
  );
};

export default ServiceChoice;
