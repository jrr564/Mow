import React from "react";
import "./SignUpContractor.css";
import NavBar from "../../components/NavBar/NavBar";
import LeftItems from "../../components/LeftItems/LeftItems";
import RightItems from "../../components/RightItems/RightItems";
import SignUpFormStep from "../../components/SignUpFormStep/SignUpFormStep";
import SignUpForm1 from "../../components/SignUpForm1/SignUpForm1";
import SignUpForm2 from "../../components/SignUpForm2/SignUpForm2";
import SignUpForm3Contractor from "../../components/SignUpForm3Contractor/SignUpForm3Contractor";
import Footer from "../../components/Footer/Footer";

const SignUpContractor = () => (
    <div>
      <NavBar LeftItems={LeftItems} RightItems={RightItems} />
      <SignUpFormStep/>
      <SignUpForm1/>
      <SignUpForm2/>
      <SignUpForm3Contractor/>
      <Footer />
    </div>
  );

export default SignUpContractor;
