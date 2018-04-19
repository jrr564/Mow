import React from "react";
import "./SuccessBooking.css";
import Navbar from "../../components/Navbar/Navbar";
import LeftItems from "../../components/LeftItems/LeftItems";
import RightItems from "../../components/RightItems/RightItems";
import BookingSummary from "../../components/BookingSummary/BookingSummary"
import Footer from "../../components/Footer/Footer";

const SuccessBooking = () => (
    <div>
      <Navbar LeftItems={LeftItems} RightItems={RightItems} />
      <BookingSummary/>
      <Footer />
    </div>
  );


  export default SuccessBooking;
