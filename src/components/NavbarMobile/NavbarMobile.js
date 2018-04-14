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
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      items={LeftItems}
      vertical
      visible={visible}
    />
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "10vh" }}
    >
      <Menu fixed="top" >
        <Menu.Item>
          <Image
            size="mini"
            src="https://d30y9cdsu7xlg0.cloudfront.net/png/12106-200.png"
          />
        </Menu.Item>
        <Menu.Menu position="left">
          {_.map(LeftItems, item => <Menu.Item {...item} />)}
        </Menu.Menu>
        <Menu.Menu position="right">
          {_.map(RightItems, item => <Menu.Item {...item} />)}
        </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default NavBarMobile;
