import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {lightGreen600} from 'material-ui/styles/colors';

const style = {
  
 
  
};

const RaisedButtonExampleSimple = (props) => (
  <div>
  
<RaisedButton
      backgroundColor="#a4c639"
      hoverColor="#8AA62F"
      label="Book Now!"
style = {{
    margin: 40,
    height: 80,
    width: 250,
borderRadius : 3,
border : 0,
boxShadow : '0 3px 5px 2px rgba(0, 0, 15, .30)'
}}
    />
    <RaisedButton
backgroundColor = "Transparent"

      hoverColor="#8AA62F"
      label="Services and Pricing"
style = {{
    margin: 40,
    height: 80,
    width: 250,
borderRadius : 3,
border : 0,
// padding : '0 30px',
boxShadow : '0 3px 5px 2px rgba(0, 0, 15, .30)'
}}
    />
   
 
   
  </div>
);

export default RaisedButtonExampleSimple;