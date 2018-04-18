import React from "react";
import "./BookService.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import LeftItems from "../../components/LeftItems/LeftItems";
import RightItems from "../../components/RightItems/RightItems";
import ServiceChoice from "../../components/ServiceChoice/ServiceChoice"
import MaidForm from "../../components/MaidForm/MaidForm";
import LawnForm from "../../components/LawnForm/LawnForm";
import Footer from "../../components/Footer/Footer";

const BookService = () => (
    <div>
    <NavBar LeftItems={LeftItems} RightItems={RightItems} />
    <ServiceChoice/>
    <Switch>
        <Route path="/BookService/MaidForm" component={MaidForm}/>
        <Route path="/BookService/LawnForm" component={LawnForm}/>
    </Switch>
    <Footer/>
    </div>
)


export default BookService;
