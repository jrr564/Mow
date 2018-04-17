import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import diego from "./diego.jpeg";
import chen from "./chen.jpeg";
import jon from "./jon.jpeg";
import matt from "./matt.jpeg";

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5};

/**
 * Examples of `Avatar` using an image, [Font Icon](/#/components/font-icon), [SVG Icon](/#/components/svg-icon)
 * and "Letter" (string), with and without custom colors at the default size (`40dp`) and an alternate size (`30dp`).
 */
const AvatarExampleSimple = () => (
  <List>
     <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          src={diego}
          size={50}
          style={style}
        />
      }
    >
      <p>My love for UpKeep knows no bounds!</p>
    </ListItem>
     <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          src={chen}
          size={50}
          style={style}
        />
      }
    >
      <p>Who needs to clean your own home anymore when you have UpKeep?</p>
    </ListItem>
     <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          src={jon}
          size={50}
          style={style}
        />
      }
    >
      <p>UpKeep blew my expectations!</p>
    </ListItem>
     <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          src={matt}
          size={50}
          style={style}
        />
      }
    >
      <p>UpKeep not only cleaned my house but left me mints!</p>
    </ListItem>
  </List>
);

export default AvatarExampleSimple;