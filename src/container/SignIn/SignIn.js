import React from "react";
import "./SignIn.css";
import Navbar from "../../components/Navbar/Navbar";
import SignInForm from "../../components/SignInForm/SignInForm";
import Footer from "../../components/Footer/Footer";

const SignIn = () => (
  <div>
    <div style={{ marginBottom: "100px", marginTop: "100px" }}>
      <SignInForm/>
    </div>
    <Footer />
    </div>
);

export default SignIn;
