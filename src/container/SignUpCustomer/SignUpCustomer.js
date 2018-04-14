import React from "react";
import "./SignUpCustomer.css";
import NavBar from "../../components/NavBar/NavBar";
import LeftItems from "../../components/LeftItems/LeftItems";
import RightItems from "../../components/RightItems/RightItems";
import SignUpForm1 from "../../components/SignUpForm1/SignUpForm1";
import SignUpForm2 from "../../components/SignUpForm2/SignUpForm2";
import SignUpForm3Customer from "../../components/SignUpForm3Customer/SignUpForm3Customer";
import SignUpFormStep from "../../components/SignUpFormStep/SignUpFormStep";
import Footer from "../../components/Footer/Footer";

const SignUpCustomer = () => (
    <div>
      <NavBar LeftItems={LeftItems} RightItems={RightItems} />
      <SignUpFormStep/>
      <SignUpForm1/>
      <SignUpForm2/>
      <SignUpForm3Customer/>
      <Footer />
    </div>
  );

export default SignUpCustomer;
