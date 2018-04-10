
import React from "react";
import { Grid, Header, Icon, Image } from "semantic-ui-react";
import "./style.css";

const Footer = () => {
  return (
      <div className="StyledFooter">
        <Grid relaxed>
          <Grid.Row verticalAlign="right">
            <Grid.Column width={12} mobile={16}>
              <a href="https://github.com/Metnew/suicrux">
                <Header as="h3">
                  <Image
                    size="small"
                    src="https://d30y9cdsu7xlg0.cloudfront.net/png/12106-200.png"
                  />
                  <Header.Content>UpKeep - Copyright 2018</Header.Content>
                </Header>
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
  );
};

export default Footer;
