import React from "react";
import { Grid, Header, Icon, Image } from "semantic-ui-react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer style={{ marginTop: "2em"}}>
        <h3 style={{padding: "10px"}}>
          UpKeep <Icon name="copyright" />2018
             
          <Icon name="facebook official" />
          <Icon name="twitter" />
          <Icon name="github" />
          <Icon name="facebook official" />
        </h3>
      </footer>
    </div>
  );
};

export default Footer;
