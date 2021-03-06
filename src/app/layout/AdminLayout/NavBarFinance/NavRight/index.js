import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";

class NavRight extends Component {
  state = {
    listOpen: false
  };

  render() {
    let navItemClass = ["nav-item"];
    if (this.props.windowWidth <= 575) {
      navItemClass = [...navItemClass, "d-none"];
    }

    let dropdownRightAlign = false;
    if (this.props.rtlLayout) {
      dropdownRightAlign = true;
    }

    return (
      <Aux>
        <ul className="navbar-nav ml-auto">
          <li className={navItemClass.join(" ")}>
            <Dropdown alignRight={dropdownRightAlign}>
              <Dropdown.Toggle variant={"link"} id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <ul>
                <Dropdown.Menu>
                  <li>
                    <a className="dropdown-item" href={DEMO.BLANK_LINK}>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href={DEMO.BLANK_LINK}>
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href={DEMO.BLANK_LINK}>
                      Something else here
                    </a>
                  </li>
                </Dropdown.Menu>
              </ul>
            </Dropdown>
          </li>
        </ul>
      </Aux>
    );
  }
}

export default NavRight;
