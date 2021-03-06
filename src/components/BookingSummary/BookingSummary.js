import React, { Component } from "react";  
// import React from "react";
import "./BookingSummary.css";

import SegmentGroup, {
  Segment,
  Container,
  Header,
  Form,
  Button,
  Icon,
  Table
} from "semantic-ui-react";
import FormField from "semantic-ui-react";

export default class BookingSummary extends Component {
  state = {}

  componentDidMount() {
    console.log(this.props.history);
  }

  render() {
    return (
      <Container fluid style={{ width: "80%" }}>
        <Segment padded textAlign="center" attached size="huge" color="black" inverted as="h1">
            You booked successfully!
        </Segment>
        <Segment.Group>
          <Segment.Group horizontal>
            <Segment size="large">Transaction #: 34240198850</Segment>
            <Segment size="large">
              Service Provider: Frank and Antoine Mowing
            </Segment>
          </Segment.Group>
          <Segment.Group attached="true" horizontal>
            <Segment size="large">
              Type: Lawn Services
            </Segment>
            <Segment size="large">Date: September 17, 2018</Segment>
            <Segment size="large">Time Slot: Morning - 9am-1pm</Segment>
          </Segment.Group>
          </Segment.Group>
            <Table unstackable fluid style={{margin: "0px"}}size="large" columns={2} singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell textAlign="center">Service</Table.HeaderCell>
                  <Table.HeaderCell textAlign="right">Price</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell textAlign="center">Standard Mow</Table.Cell>
                  <Table.Cell textAlign="right">$55.49</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="center">Hedging Services</Table.Cell>
                  <Table.Cell textAlign="right">$25.00</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell textAlign="right">Subtotal: $80.49</Table.Cell>
                </Table.Row>
                <Table.Row >
                  <Table.Cell />
                  <Table.Cell size="tiny" textAlign="right">Tax: 8.25%</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell padded size="huge" textAlign="right">
                    Total: $87.14
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
      </Container>
    );
  }
}
