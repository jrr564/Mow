import React from "react";
import "./ContractorAccount.css";
import Navbar from "../../components/Navbar/Navbar"
import RightItems from "../../components/RightItems/RightItems";
import ContractorInfo from "../../components/ContractorInfo/ContractorInfo";
import WorkSummary from "../../components/WorkSummary/WorkSummary";
import Footer from "../../components/Footer/Footer";

const ContractorAccount = () => (
  <div>
    <Navbar RightItems={RightItems} />
    <div class="content">
    <WorkSummary />
    <ContractorInfo />
    
    </div>
    <Footer />
  </div>
);

export default ContractorAccount;
