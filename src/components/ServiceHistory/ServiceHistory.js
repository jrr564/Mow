import React from "react";
import "./ServiceHistory.css";
import { Card, Container, Icon, Image, Rating } from "semantic-ui-react";

const ServiceHistory = () => (
  <Container>
    <Card style={{ width: '70%', margin: '40px' }} textAlign="left" centered fluid>
      <Card.Content textAlign="left" >
        <Card.Header>October 30, 2017</Card.Header>
        <Card.Meta>Afternoon</Card.Meta>
        <Card.Meta>Mow</Card.Meta>
        <Card.Description>Two Brothers Mowing</Card.Description>
        <Card.Description>$26.50</Card.Description>
      </Card.Content>

      <Card.Content extra>
          <Rating
            textAlign="right"
            size="huge"
            icon="star"
            defaultRating={5}
            maxRating={5}
          />
        <Card.Description>Perfect mow!</Card.Description>
      </Card.Content>
    </Card>
    <Card style={{ width: '70%', margin: '40px' }} textAlign="left" centered fluid>
      <Card.Content textAlign="left" >
        <Card.Header>October 16, 2017</Card.Header>
        <Card.Meta>Morning</Card.Meta>
        <Card.Meta>Maid</Card.Meta>
        <Card.Description>Two Brothers Cleaning</Card.Description>
        <Card.Description>Extras: none</Card.Description>
        <Card.Description>$66.45</Card.Description>
      </Card.Content>

      <Card.Content extra>

          <Rating
            textAlign="right"
            size="huge"
            icon="star"
            defaultRating={4}
            maxRating={5}
          />

        <Card.Description>Very professional!</Card.Description>
      </Card.Content>
    </Card>
  </Container>
);

export default ServiceHistory;
