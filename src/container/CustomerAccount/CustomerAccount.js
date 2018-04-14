import React from "react";
import "./CustomerAccount.css";
import NavBar from "../../components/NavBar/NavBar";
import LeftItems from "../../components/LeftItems/LeftItems";
import RightItems from "../../components/RightItems/RightItems";
import ContractorInfo from "../../components/ContractorInfo/ContractorInfo";
import ServiceHistory from "../../components/ServiceHistory/ServiceHistory";
import Footer from "../../components/Footer/Footer";

const CustomerAccount = () => (
    <div>
    <NavBar LeftItems={LeftItems} RightItems={RightItems} />
        <ContractorInfo/>
        <ServiceHistory/>
    <Footer/>
    </div>
)


export default CustomerAccount;
