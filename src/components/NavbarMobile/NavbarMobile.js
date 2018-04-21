import _ from "lodash";
import React from "react";
import { Icon, Image, Menu, Sidebar } from "semantic-ui-react";

const NavBarMobile = ({
  children,
  LeftItems,
  onPusherClick,
  onToggle,
  RightItems,
  visible
}) => (
      <Menu style= {{ }} fixed="top" >
        <Menu.Item>
          <Image
          alt="logo"
            size="tiny"
            src={require('../Navbar/logo.svg')}
            href="/"
          />
        </Menu.Item>
        <Menu.Menu position="left">
          {_.map(LeftItems, item => <Menu.Item style={{background: "#c0ffda"}} {...item} />)}
        </Menu.Menu>
        <Menu.Menu position="right">
          {_.map(RightItems, item => <Menu.Item style={{background: "whitesmoke"}} {...item} />)}
        </Menu.Menu>
      </Menu>
);

export default NavBarMobile;
