import React from "react";
import "./SignIn.css";
import Navbar from "../../components/Navbar/Navbar";
import SignInForm from "../../components/SignInForm/SignInForm";
import Footer from "../../components/Footer/Footer";
import { Image } from "semantic-ui-react";

const SignIn = () => (
  <div>
    <div className="SignInTitle">
    </div>
    <div >
      <SignInForm />
    </div>
    <Footer />
  </div>
);

export default SignIn;
