import React from "react";
import "./CompleteModalContractor.css";
import {
  Button,
  Header,
  Image,
  Modal,
  Rating,
  Checkbox,
  Form
} from "semantic-ui-react";

const CompleteModalContractor = () => (
  <Modal
    textAlign="center"
    trigger={<Button size="small">Complete
    </Button>}
  >
    <Modal.Content image>
      <Modal.Description textAlign="center">
        <Form size="huge">
          <Header size="huge" textAlign="center">
            Tell us about your experience
          </Header>
          <h2 textAlign="center" size="huge">
            How would you rate this customer?
          </h2>
          <Rating
            textAlign="center"
            size="huge"
            icon="star"
            defaultRating={0}
            maxRating={5}
          />
          <h2 textAlign="center" size="huge">
            Would your like to schedule regular service with this customer?
          </h2>
          <Button.Group>
            <Button>Yes</Button>
            <Button>No</Button>
          </Button.Group>
          <h2 textAlign="center" size="huge">
            Is there anything we should know?
          </h2>
          <Form.Input size="huge"/>
          <Button size="huge" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default CompleteModalContractor;
