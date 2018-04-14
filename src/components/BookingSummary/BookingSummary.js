import React from "react";
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

const BookingSummary = () => (
  <Container style={{ width: "80%" }}>
    <Segment.Group>
      <Segment padded attached size="huge" color="green" inverted as="h1">
        You booked successfully!
      </Segment>
      <Segment.Group horizontal>
        <Segment size="large">Transaction #: 34240198850</Segment>
        <Segment size="large">
          Service Provider: Frank and Antoine Mowing
        </Segment>
      </Segment.Group>
      <Segment.Group attached horizontal>
        <Segment size="large">
          Type: Lawn Services
        </Segment>
        <Segment size="large">Date: September 17, 2018</Segment>
        <Segment size="large">Time: Morning - 9am-1pm</Segment>
      </Segment.Group>
      <Container>
        <Table style={{margin: "5px"}} size="large" columns={2} singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Service</Table.HeaderCell>
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
    </Segment.Group>
  </Container>
);

export default BookingSummary;
