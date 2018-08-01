import React from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from "reactstrap";

export default class Napigasi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="https://google.com">
            <img
              src="http://i63.tinypic.com/oid9xu.png"
              width="46"
              height="50"
              alt=""
            />
          </a>
          <a class="navbar-brand" href="https://google.com">
            Clone Santren Koding
          </a>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="https://google.com">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://google.com">
                  Kajian Koding
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://google.com">
                  Santren Kilat
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://google.com">
                  Mondok
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://google.com">
                  Tentang Kami
                </a>
              </li>
              <form>
                <button type="button" class="btn btn-outline-primary">
                  Login / Sign Up
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
