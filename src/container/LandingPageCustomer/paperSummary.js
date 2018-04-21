import React from 'react';
import Paper from 'material-ui/Paper';
import logo from './logo.svg';

const style = {
 
};

const PaperExampleSimple1 = () => (
  <div>

    <Paper style={{height: 600,
  width: 700,
  margin: "0 auto",
  textAlign: 'center',
  display: 'block   '}} zDepth={2}>
    <img src={logo} className="appLogo" alt="logo" style={{margin: 0, height:60}}/>
    <p>UpKeep is a company that is dedicated to making sure you lawn and home are immaculate on a daily basis. Too many people today are unable to clean their own homes to their wanted caliber, and are hesitant to hire a cleaning service because they are unsure about the type of home cleaning they will receive. Serving cities across the nation, UpKeep is a different kind of home and lawn service. A dedicated and professional team of employees can do anything from trimming hedges to a simple wipe down of your furniture and appliances. With our company you need not worry about lack luster cleaners who do not deliver the quality you are promised. We take pride in having quality services, friendly cleaners, and your trust. With UpKeep, your home and lawn is in good hands. A five star rating across the web, we guarantee that you will love our convenient in home cleaning services. </p>
    </Paper>
    
  </div>
);

export default PaperExampleSimple1;