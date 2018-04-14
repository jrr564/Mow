import React from "react";
import "./SuccessBooking.css";
import NavBar from "../../components/NavBar/NavBar";
import LeftItems from "../../components/LeftItems/LeftItems";
import RightItems from "../../components/RightItems/RightItems";
import BookingSummary from "../../components/BookingSummary/BookingSummary"
import Footer from "../../components/Footer/Footer";

const SuccessBooking = () => (
    <div>
      <NavBar LeftItems={LeftItems} RightItems={RightItems} />
      <BookingSummary/>
      <Footer />
    </div>
  );


  export default SuccessBooking;
