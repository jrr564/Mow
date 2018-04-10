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
      color="green"
      icon="labeled"
      inverted
      items={LeftItems}
      vertical
      visible={visible}
    />
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
      <Menu color="green" fixed="top" inverted>
        <Menu.Item>
          <Image
            size="mini"
            src="https://d30y9cdsu7xlg0.cloudfront.net/png/12106-200.png"
          />
        </Menu.Item>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu position="right">
          {_.map(RightItems, item => <Menu.Item {...item} />)}
        </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default NavBarMobile;
