import React, { Component } from "react";
import "./LandingPageCustomer.css";
import { Button, Container, Segment, Link  } from "semantic-ui-react";
import Navbar from "../../components/Navbar/Navbar";
import RightItems from "../../components/RightItems/RightItems";
import Footer from "../../components/Footer/Footer";


class LandingPageCustomer extends React.Component {

    
    goToSignup = event => {
        this.props.history.push(`/SignUpCustomer/SignUpForm1`);
    }
  render() {
      return(
        <Container>
        <Navbar RightItems={RightItems} />
        <Segment style={{ height: "400px" }}>
<Button onClick={this.goToSignup} inverted color="green">
            SignUp
          </Button>
        </Segment>
  
        <Footer />
      </Container>
      )

  }
}

export default LandingPageCustomer;
