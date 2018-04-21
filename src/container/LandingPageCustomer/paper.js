import React from 'react';
import Paper from 'material-ui/Paper';
import ListExampleSimple from "./whylist.js"

const style = {
  height: 600,
  width: 700,
  margin: "0 auto",
  textAlign: 'center',
  display: 'block   ',
};

const PaperExampleSimple = () => (
  <div>

    <Paper style={style} zDepth={2}>
    <ListExampleSimple />
    </Paper>
    
  </div>
);

export default PaperExampleSimple;