import React from 'react';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {lightGreen600} from 'material-ui/styles/colors';
import logo1 from './logo1.svg';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconMenuExampleControlled from "./dropdown.js";

const muiTheme = getMuiTheme({
    
    appBar: {
        height: 50,
        width: "100%",
        textAlign: "center"
        
    },
     typography: {
    fontFamily: 'leagueGothic',
    caption: {
      fontFamily: "sans-serif"
    }
}
});

// MuiThemeProvider takes the theme as a property and passed it down the
// hierarchy.
const AppBarExampleIcon = (props) => (

    <div>
    <MuiThemeProvider muiTheme={muiTheme}>
    
<AppBar 
title = {"Book now for 10% your first service!"}
style = {{backgroundColor: props.color1}}
iconClassNameRight = "muidocs-icon-navigation-expand-more"
fullWidth={true}>
<IconMenuExampleControlled />
</AppBar>




    </MuiThemeProvider>
    </div>
);



export default AppBarExampleIcon;