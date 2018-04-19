import React from "react";
import "./CustomerAccount.css";
import Navbar from "../../components/Navbar/Navbar";
import LeftItems from "../../components/LeftItems/LeftItems";
import RightItems from "../../components/RightItems/RightItems";
import ContractorInfo from "../../components/ContractorInfo/ContractorInfo";
import ServiceHistory from "../../components/ServiceHistory/ServiceHistory";
import Footer from "../../components/Footer/Footer";
import AccountInfo from "../../components/AccountInfo/AccountInfo";

const CustomerAccount = () => (
    <div>
    <Navbar LeftItems={LeftItems} RightItems={RightItems} />
        <AccountInfo/>
        <ServiceHistory/>
    <Footer/>
    </div>
)


export default CustomerAccount;
