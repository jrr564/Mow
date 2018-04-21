import _ from "lodash";
import React from "react";
import "./NavBarDesktop.css";
import LeftItems from "../../components/LeftItems/LeftItems";
import RightItems from "../../components/RightItems/RightItems";
import { Image, Menu } from "semantic-ui-react";

const NavBarDesktop = ({ LeftItems, RightItems }) => (
  <Menu fixed="top">
    <Menu.Item>
      <Image
        size="tiny"
        src= {require('../Navbar/logo.svg')}
      />
    </Menu.Item>
    {_.map(LeftItems, item => (<Menu.Item style={{background: "#c0ffda"}} {...item} />
    ))}
    <Menu.Menu  position="right">
      {_.map(RightItems, item => (<Menu.Item style={{background: "whitesmoke"}} {...item} />
      ))}
    </Menu.Menu>
  </Menu>
);

export default NavBarDesktop;
