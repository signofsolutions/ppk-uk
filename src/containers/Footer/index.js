import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FooterContainer,
  FooterInner,
  FooterNav,
  FooterCopyright,
  FooterLogo,
  FooterCol,
  FooterColTitle,
  FooterList,
  FooterListItem,
  FooterDescrip,
  FooterListItemIcon,
  FooterListItemLabel,
} from "./styles/footer.style.";

function Sidebar() {
  const location = useLocation();
  const activeLink = location.pathname;

  return (
    <FooterContainer>
      <FooterInner>
        <FooterNav>
          <FooterLogo
            src={require("../../assets/images/home/footerlogo.png")}
            alt="logo"
          />
          <FooterCol />
          <FooterCol>
            <FooterColTitle>Browse</FooterColTitle>
            <FooterList>
              <FooterListItem href="/about">Home</FooterListItem>
              <FooterListItem href="/contact">About us</FooterListItem>
              <FooterListItem>Contact us</FooterListItem>
            </FooterList>
          </FooterCol>
          <FooterCol>
            <FooterColTitle>Share</FooterColTitle>
            <FooterList>
              <FooterListItem>
                <FooterListItemIcon className="mdi mdi-facebook" />
                <FooterListItemLabel>Facebook</FooterListItemLabel>
              </FooterListItem>
              <FooterListItem>
                <FooterListItemIcon className="mdi mdi-linkedin" />
                <FooterListItemLabel>Linkedin</FooterListItemLabel>
              </FooterListItem>
              <FooterListItem>
                <FooterListItemIcon className="mdi mdi-instagram" />
                <FooterListItemLabel>Instagram</FooterListItemLabel>
              </FooterListItem>
            </FooterList>
          </FooterCol>
          <FooterCol>
            <FooterColTitle>Why us?</FooterColTitle>
            <FooterDescrip>
              Housing designed with Contractors in mind?
            </FooterDescrip>
            <FooterList>
              <FooterListItem>
                <FooterListItemIcon className="mdi mdi-email" />
                <FooterListItemLabel>info@pppn.co.uk</FooterListItemLabel>
              </FooterListItem>
              <FooterListItem>
                <FooterListItemIcon className="mdi mdi-phone" />
                <FooterListItemLabel>+44 737717245</FooterListItemLabel>
              </FooterListItem>
              <FooterListItem>
                <FooterListItemIcon className="mdi mdi-map-marker" />
                <FooterListItemLabel>Nationwide</FooterListItemLabel>
              </FooterListItem>
            </FooterList>
          </FooterCol>
        </FooterNav>
        <FooterCopyright>pppn.co.uk 2020</FooterCopyright>
      </FooterInner>
    </FooterContainer>
  );
}

export default Sidebar;
