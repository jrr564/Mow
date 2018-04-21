import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import SvgIcon from './leaf.svg';
import { Coffee, Food, CurrencyUsd, Broom, FormatAnnotationPlus, Leaf} from 'mdi-material-ui'
import moneySign from "./moneySign.svg";
import clipBoard from "./clipBoard.svg";
import happyFace from "./happyFace.svg";
import greenHouse from "./greenHouse.svg";
import './whylist.css';

const style = {
  
   
  
};

const ListExampleSimple = () => (
    <a className="listBox">
        <List>
       
        <h1>Why customers choose UpKeep</h1>
        <div className="box">
        <p>
            <img src={moneySign} className="moneySign" style={{ margin:0, width:60, marginLeft:0}} />
            </p>
            <p>
            <strong>Affordable Pricing</strong>
            <br />
            Get the most bang for your buck with our multiple 
house cleaning and lawn care services.</p>
            </div>
            <div className="box">
            <p>
            <img src={clipBoard} className="clipBoard" style={{ margin:0, width:50, marginLeft:0}} />
            </p>
            <p>
            <strong>Verified Employees</strong>
            <br />
            All of our employees are verified through a 3rd party verification system.</p>
            </div>
            <div className="box">
            <p>
            <img src={greenHouse} className="greenHouse" style={{ margin:0, width:60, marginLeft:0}} />
            </p>
            <p>
            <strong>Environmentally Friendly Products</strong>
            <br />
            We only use qualified products that are environmentally friendly and sustainable.</p>
            </div>
            <div className="box">
            <p>
            <img src={happyFace} className="happyCustomers" style={{ margin:0, width:50, marginLeft:0}} />
            </p>
            <p>
            <strong>Hundreds of Happy Customers</strong>
            <br />
            Fear not, our 4.8 star average review shows how happy our customers really are with our services.</p>
            </div>
         
        </List>
       
    </a>
);



export default ListExampleSimple;