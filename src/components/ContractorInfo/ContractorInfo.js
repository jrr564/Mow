import React from "react";
import "./ContractorInfo.css";
import { Link } from "react-router-dom";
import SegmentGroup, {
  Segment,
  Container,
  Header,
  Button,
  Icon
} from "semantic-ui-react";

const ContractorInfo = () => (
  <Container style={{ width: "60%" }}>
    <Segment.Group>
      <Segment as="h1" size="huge" textAlign='center'>
      Account Information <Icon name="id card"/>
      </Segment>
      <Segment.Group horizontal>
        <Segment>
          {" "}
          <Header size="tiny">First Name</Header>Jon
        </Segment>
        <Segment>
          <Header size="tiny">Last Name</Header>Smith
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
          <Header size="tiny">Bank Account</Header> XXXXXXXXX-XXXXX5678
        </Segment>
        <Segment>
          <Header size="tiny">SSN</Header> XXX-XX-1234
        </Segment>
        <Segment>
          <Header size="tiny">YTD Gross</Header> $$$$$
        </Segment>
        <Segment>
          <Link to="/SignUpContractor/SignUpForm2">
            <Button fluid>Edit Information</Button>
          </Link>
        </Segment>
      </Segment.Group>
    </Segment.Group>
  </Container>
);

export default ContractorInfo;
