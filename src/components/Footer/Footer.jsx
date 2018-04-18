import React from "react";
import { Grid, Header, Icon, Image } from "semantic-ui-react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer style={{ marginTop: "2em"}}>
        <h4>
          UpKeep <Icon name="copyright" />2018
             
          <Icon name="facebook official" />
          <Icon name="twitter" />
          <Icon name="github" />
          <Icon name="facebook official" />
        </h4>
      </footer>
    </div>
  );
};

export default Footer;
