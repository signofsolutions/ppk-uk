import React, { useState } from "react";
import "./header.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Images } from "utils/image";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header-container">
      <div className="header-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-12 text-center">
              <div className="header-top-item">
                <div className="header-top-text">
                  <i className="fa fa-envelope fa-fw blue-color" /> info@pppn.co.ul
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-12 text-center">
              <div className="header-top-item">
                <div className="header-top-text">
                  <i className="fa fa-phone-alt fa-fw blue-color" />
                  +44 7377172145
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="header-top-item d-flex justify-content-end">
                <div className="header-top-text">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="/">
                        <i className="fab fa-facebook-f fa-lg" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/">
                        <i className="fab fa-linkedin-in fa-lg" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/">
                        <i className="fab fa-instagram fa-lg" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-nav">
        <div className="container">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              <img src={Images.logo} alt="logo" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="login-link">
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
                <NavItem className="signup-link">
                  <NavLink href="/sign-up">Sign-up</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default Header;
