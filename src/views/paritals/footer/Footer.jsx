import React from "react";
import "./footer.scss";
import { Images } from "utils/image";

function Footer() {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="footer-inner">
          <div className="row section-flex-row">
            <div className="col-4 footer-col">
              <img src={Images.logoLarge} className="footer-image" alt="image" aria-hidden="true"/>
              <h1 className="title">Share</h1>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/PppnSocial">
                    <i className="fab fa-facebook-f fa-lg" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/company/jv-hub">
                    <i className="fab fa-linkedin-in fa-lg" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/perpersonpernight">
                    <i className="fab fa-instagram fa-lg" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col footer-col">
              <h1 className="title">Browse</h1>
              <ul className="list-unstyled">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/aboutus">About us</a>
                </li>
                <li>
                  <a href="/contactus">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="col footer-col">
              <h1 className="title">Support</h1>
              <ul className="list-unstyled">
                <li>
                  <a href="/terms">Terms & Condition</a>
                </li>
                <li>
                  <a href="/policy">Policy Privacy</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-4 footer-col">
              <h1 className="title">Why us?</h1>
              <ul className="list-unstyled">
                <li>Housing Designed with Constructors is minds!</li>
                <li>
                  <i className="fa fa-envelope blue-color" /> info@pppn.co.uk
                </li>
                <li>
                  <i className="fa fa-phone-alt blue-color" /> 0333 242 3281
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="d-flex justify-content-center">pppn.co.uk 2020</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
