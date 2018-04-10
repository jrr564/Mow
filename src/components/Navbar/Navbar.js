import React, { Component } from "react";
import { Responsive } from "semantic-ui-react";
import NavBarDesktop from "../NavBarDesktop/NavBarDesktop";
import NavBarMobile from "../NavbarMobile/NavbarMobile";
import NavBarChildren from "../NavBarChildren/NavBarChildren";

class NavBar extends Component {
    state = {
      visible: false
    };
  
    handlePusher = () => {
      const { visible } = this.state;
  
      if (visible) this.setState({ visible: false });
    };
  
    handleToggle = () => this.setState({ visible: !this.state.visible });
  
    render() {
      const { children, LeftItems, RightItems } = this.props;
      const { visible } = this.state;
  
      return (
        <div>
          <Responsive {...Responsive.onlyMobile}>
            <NavBarMobile
              leftItems={LeftItems}
              onPusherClick={this.handlePusher}
              onToggle={this.handleToggle}
              rightItems={RightItems}
              visible={visible}
            >
              <NavBarChildren>{children}</NavBarChildren>
            </NavBarMobile>
          </Responsive>
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <NavBarDesktop LeftItems={LeftItems} RightItems={RightItems} />
            <NavBarChildren>{children}</NavBarChildren>
          </Responsive>
        </div>
      );
    }
  }

export default NavBar;
