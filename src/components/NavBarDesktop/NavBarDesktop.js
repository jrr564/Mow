import _ from "lodash";
import React from "react";
import { Image, Menu } from "semantic-ui-react";

const NavBarDesktop = ({ LeftItems, RightItems }) => (
    <Menu color="green" fixed="top" inverted>
      <Menu.Item>
        <Image size="mini" src="https://d30y9cdsu7xlg0.cloudfront.net/png/12106-200.png" />
      </Menu.Item>
      {_.map(LeftItems, item => <Menu.Item {...item} />)}
      <Menu.Menu position="right">
        {_.map(RightItems, item => <Menu.Item {...item} />)}
      </Menu.Menu>
    </Menu>
  );

export default NavBarDesktop;
