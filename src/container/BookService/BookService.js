import React from "react";
import "./BookService.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import LeftItems from "../../components/LeftItems/LeftItems";
import RightItems from "../../components/RightItems/RightItems";
import ServiceChoice from "../../components/ServiceChoice/ServiceChoice";
import MaidForm from "../../components/MaidForm/MaidForm";
import LawnForm from "../../components/LawnForm/LawnForm";
import Footer from "../../components/Footer/Footer";

const BookService = () => (
  <div>
    <Navbar LeftItems={LeftItems} RightItems={RightItems} />
      <div style={{marginBottom: "250px"}}>
      <ServiceChoice />
      <Switch>
        <Route path="/BookService/MaidForm" component={MaidForm} />
        <Route path="/BookService/LawnForm" component={LawnForm} />
      </Switch>
      </div>
    <Footer />
  </div>
);

export default BookService;
