import React from "react";
import "./ContractorAccount.css";
import Navbar from "../../components/Navbar/Navbar"
import LeftItems from "../../components/LeftItems/LeftItems";
import RightItems from "../../components/RightItems/RightItems";
import ContractorInfo from "../../components/ContractorInfo/ContractorInfo";
import WorkSummary from "../../components/WorkSummary/WorkSummary";
import Footer from "../../components/Footer/Footer";

const ContractorAccount = () => (
  <div>
    <Navbar LeftItems={LeftItems} RightItems={RightItems} />
    <div class="content">
    <ContractorInfo />
    <WorkSummary />
    </div>
    <Footer />
  </div>
);

export default ContractorAccount;
