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



const style = {
  
    width: 20,
    
  
};

const ListExampleSimple = () => (
    <a>
        <List>
        <h1>Why Customers Choose UpKeep</h1>
            <ListItem primaryText="Affordable Pricing" leftIcon={< CurrencyUsd />} style = {style}/>
            <ListItem primaryText="Fast Services" leftIcon={< Broom />} style = {style}/>
            <ListItem primaryText="Verified Employees" leftIcon={< FormatAnnotationPlus />} style = {style}/>
<ListItem primaryText="Eco Friendly Products" leftIcon={< Leaf />}style = {style}/>
        </List>
       
    </a>
);



export default ListExampleSimple;