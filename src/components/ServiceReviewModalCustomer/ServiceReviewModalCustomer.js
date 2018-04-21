import React from "react";
import "./ServiceReviewModalCustomer.css";
import {
  Button,
  Header,
  Image,
  Modal,
  Rating,
  Checkbox,
  Form
} from "semantic-ui-react";

const ServiceReviewModalCustomer = () => (
  <Modal
    textAlign="center"
    trigger={<Button size="medium">Review</Button>}
  >
    <Modal.Content image>
      <Modal.Description textAlign="center">
        <Form size="huge">
          <Header size="huge" textAlign="center">
            Tell us about your experience
          </Header>
          <h2 textAlign="center" size="huge">
            Rate your Satisfaction
          </h2>
          <Rating
            textAlign="center"
            size="huge"
            icon="star"
            defaultRating={0}
            maxRating={5}
          />
          <h2 textAlign="center" size="huge">
            Would your like to schedule regular service?
          </h2>
          <Button.Group>
            <Button>Yes</Button>
            <Button>No</Button>
          </Button.Group>
          <h2 textAlign="center" size="huge">
            What can we do better?
          </h2>
          <Form.Input size="huge" />
          <Button size="huge" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ServiceReviewModalCustomer;
