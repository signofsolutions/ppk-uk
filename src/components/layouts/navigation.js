import React from "react";
import {
  NavContainer,
  NavInner,
  NavItemBrand,
  NavItemMenu,
  NavItemAccount,
  NavLogo,
  BookNowButton,
  SignInButton,
} from "./styles/nav.style";

export default function Navigation() {
  return (
    <NavContainer>
      <NavInner>
        <NavItemBrand>
          <NavLogo
            src={require("../../assets/images/home/logo.png")}
            alt="logo"
          />
        </NavItemBrand>
        <NavItemAccount>
          <SignInButton href="https://pppn.co.uk/dashboard/">
            Sign in
          </SignInButton>
        </NavItemAccount>
      </NavInner>
    </NavContainer>
  );
}
