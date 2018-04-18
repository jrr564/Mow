import React, { Component } from "react";
import "./AccountInfo.css";
import { Link } from 'react-router-dom';
import SegmentGroup, {
  Segment,
  Container,
  Header,
  Button,
  Icon
} from "semantic-ui-react";

class AccountInfo extends React.Component {
  render() {
    return (
      <Container style={{ width: "60%", margin: "40px" }}>
        <Segment.Group>
        <Segment as="h1" size="huge" textAlign='center'>
        <Icon name="id card"/>Account Information
      </Segment>
          <Segment.Group horizontal>
            <Segment>
              {" "}
              <Header size="tiny">First</Header>Jon
            </Segment>
            <Segment>
              <Header size="tiny">Last</Header>Smith
            </Segment>
            <Segment>
              <Header size="tiny">Phone Number</Header>(210) 287-5128
            </Segment>
          </Segment.Group>

          <Segment.Group horizontal>
            {" "}
            <Segment>
              <Header size="tiny">Address</Header>210 Elkhart St
            </Segment>
            <Segment>
              <Header size="tiny">City</Header>Austin
            </Segment>
            <Segment>
              <Header size="tiny">State</Header>TX
            </Segment>
            <Segment>
              <Header size="tiny">Zip Code</Header>78702
            </Segment>
          </Segment.Group>
          <Segment.Group horizontal>
            <Segment>
              <Header size="tiny">
                <Icon name="credit card" size="tiny" /> Credit Card
              </Header>{" "}
              Visa XXXX-XXXX-XXXX-XXXX
            </Segment>
            <Segment>
              <Header size="tiny">Valid thru</Header> 05/22
            </Segment>
            <Segment >
              <Link to="/SignUpCustomer/SignUpForm2"><Button fluid >
                Edit Information
              </Button></Link>
            </Segment>
          </Segment.Group>
        </Segment.Group>
      </Container>
    );
  }
}

export default AccountInfo;
