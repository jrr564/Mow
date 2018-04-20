import React from "react";
import {
  Header,
  Segment,
  Table,
  Rating,
  Icon,
  Container,
  Button
} from "semantic-ui-react";
import ServiceReviewModalContractor from "../ServiceReviewModalCustomer/ServiceReviewModalCustomer";
import CompleteModalContractor from "../CompleteModalContractor/CompleteModalContractor";

const WorkSummary = () => (
  <Container style={{ margin: "30px" }}>
    <Segment attached textAlign="center" size="huge" as="h1">
      Service History<Icon name="history"/>
    </Segment>
    <Table attached celled padded>
      <Table.Header>
        <Table.Row textAlign="center">
          <Table.HeaderCell singleLine>Date</Table.HeaderCell>
          <Table.HeaderCell>Name / Address</Table.HeaderCell>
          <Table.HeaderCell>Phone Number</Table.HeaderCell>
          <Table.HeaderCell>Review</Table.HeaderCell>
          <Table.HeaderCell>Total</Table.HeaderCell>
          <Table.HeaderCell>Comments</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row positive>
          <Table.Cell singleLine >
            <Header textAlign="center">April 22, 2018</Header>
          </Table.Cell>
          <Table.Cell singleLine>3425 Fake St.</Table.Cell>
          <Table.Cell singleLine>(210) 234-1234</Table.Cell>
          <Table.Cell>
            <Rating icon="star" disabled defaultRating={0} maxRating={5} />
          </Table.Cell>
          <Table.Cell textAlign="right">
            $180 <br /><br/>
            <a href="#">Bill</a>
          </Table.Cell>
          <Table.Cell textAlign="center">
            <CompleteModalContractor/>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell singleLine >
            <Header textAlign="center">November 28, 2017</Header>
          </Table.Cell>
          <Table.Cell singleLine>3425 Fake St.</Table.Cell>
          <Table.Cell singleLine>(210) 234-1234</Table.Cell>
          <Table.Cell>
            <Rating icon="star" defaultRating={3} maxRating={5} />
          </Table.Cell>
          <Table.Cell textAlign="right">
            $180 <br /><br/>
            <a href="#">Bill</a>
          </Table.Cell>
          <Table.Cell textAlign="center" verticalAlign='top'>Dog very loud. No trash cans.<br/>
            <ServiceReviewModalContractor/>
            
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell singleLine >
            <Header textAlign="center">March 1, 2017</Header>
          </Table.Cell>
          <Table.Cell singleLine>2009 Maplethorpe St.</Table.Cell>
          <Table.Cell singleLine>(123) 123-1234</Table.Cell>
          <Table.Cell>
            <Rating icon="star" defaultRating={5} maxRating={5} />
          </Table.Cell>
          <Table.Cell textAlign="right">
            $140 <br /><br/>
            <a href="#">Bill</a>
          </Table.Cell>
          <Table.Cell textAlign="center" verticalAlign='top'>Everything went great. Owner gave us lemonade.<br/>
            <ServiceReviewModalContractor/>
            
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header textAlign="center">December 12, 2017</Header>
          </Table.Cell>
          <Table.Cell singleLine>3425 Fake St.</Table.Cell>
          <Table.Cell singleLine>(210) 234-1234</Table.Cell>
          <Table.Cell>
            <Rating icon="star" defaultRating={5} maxRating={5} />
          </Table.Cell>
          <Table.Cell textAlign="right">
            $220 <br />
            <a href="#">Bill</a>
          </Table.Cell>
          <Table.Cell textAlign="center" verticalAlign='top'>
            No Comment<br/><br/>
          <ServiceReviewModalContractor/> 
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
);

export default WorkSummary;
