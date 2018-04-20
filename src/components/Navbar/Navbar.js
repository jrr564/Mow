import React, { Component } from "react";
import "./Navbar.css";
import { Responsive } from "semantic-ui-react";
import NavBarDesktop from "../NavBarDesktop/NavBarDesktop";
import NavBarMobile from "../NavBarMobile/NavBarMobile";
import NavBarChildren from "../NavBarChildren/NavBarChildren";

class Navbar extends Component {
    state = {
      visible: false
    };
  //
    handlePusher = () => {
      const { visible } = this.state;
  
      if (visible) this.setState({ visible: false });
    };
  
    handleToggle = () => this.setState({ visible: !this.state.visible });
  
    render() {
      const { children, LeftItems, RightItems } = this.props;
      const { visible } = this.state;
  
      return (
        <div className="NavBar">
          <Responsive {...Responsive.onlyMobile}>
            <NavBarMobile
              LeftItems={LeftItems}
              onPusherClick={this.handlePusher}
              onToggle={this.handleToggle}
              RightItems={RightItems}
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

export default Navbar;
