import React from "react";
import { Button, Container, Grid, Segment } from "semantic-ui-react";
import "./ServiceChoice.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const ServiceChoice = () => {
  return (
    <Container >
      <Segment style={{margin: "10px 10px 10px 10px"}}padded inverted fluid size="huge" textAlign="center" as="h1">
        What service would you like to schedule?
      </Segment>
      <Grid columns="equal">
        <Grid.Column/>
        <Grid.Column>
          <Button.Group size="big">
            <Link to="/BookService/MaidForm">
              <Button color="blue">Cleaning Service</Button>
            </Link>
            <Button.Or />
            <Link to="/BookService/LawnForm">
              <Button color="green">Lawn Service</Button>
            </Link>
          </Button.Group>
        </Grid.Column>
        <Grid.Column/>
      </Grid>
    </Container>
  );
};

export default ServiceChoice;
