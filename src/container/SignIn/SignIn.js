import React from "react";
import "./SignIn.css";
import Navbar from "../../components/Navbar/Navbar";
import SignInForm from "../../components/SignInForm/SignInForm";
import Footer from "../../components/Footer/Footer";

const SignIn = () => (
  <div>
    <div style={{ marginBottom: "100px", marginTop: "100px" }}>
      <div style={{ background: "yellowgreen", marginTop: "2em", height: "500px", width: "100%"}} >
      <SignInForm/>

    </div>
    <Footer />
    </div>
);

export default SignIn;
