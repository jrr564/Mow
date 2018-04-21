import React from "react";
import { Container, Segment } from "semantic-ui-react";

const NoMatch = () => (
  <Container fluid>
    <Segment textAlign="center">
      <h1>404 Page Not Found</h1>
      <h1>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
      </h1>
    </Segment>
  </Container>
);

export default NoMatch;
