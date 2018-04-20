import React from "react";
import "./SignIn.css";
import Navbar from "../../components/Navbar/Navbar";
import SignInForm from "../../components/SignInForm/SignInForm";
import Footer from "../../components/Footer/Footer";
import { Image } from "semantic-ui-react";

const SignIn = () => (
  <div>
    <Image fluid
      className="animation-target"
      size="small"
      src="https://d30y9cdsu7xlg0.cloudfront.net/png/12106-200.png"
    />
    <div className="SignInTitle">
      <h1>
        <span>Welcome</span>
        <br />
        <span>to</span>
        <br /> UpKeep
      </h1>
    </div>
    <div >
      <SignInForm />
    </div>
    <Footer />
  </div>
);

export default SignIn;
