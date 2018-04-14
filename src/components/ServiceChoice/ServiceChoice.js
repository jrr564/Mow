import React from "react";
import { Button, Container, Segment } from "semantic-ui-react";
import "./ServiceChoice.css";

const ServiceChoice = () => {
  return (
    <Container>
      <Segment as="h1">What service would you like to schedule?</Segment>
      <Button size="huge">Cleaning Servie</Button>
      <Button size="huge" color="green">Lawn Service</Button>
    </Container>
  );
};

export default ServiceChoice;
