import React from "react";
import "./ContractorAccount.css";
import NavBar from "../../components/NavBar/NavBar";
import LeftItems from "../../components/LeftItems/LeftItems";
import RightItems from "../../components/RightItems/RightItems";
import ContractorInfo from "../../components/ContractorInfo/ContractorInfo";
import WorkSummary from "../../components/WorkSummary/WorkSummary";
import Footer from "../../components/Footer/Footer";

const ContractorAccount = () => (
  <div>
    <NavBar LeftItems={LeftItems} RightItems={RightItems} />
    <ContractorInfo />
    <WorkSummary />
    <Footer />
  </div>
);

export default ContractorAccount;
