import React from "react";
import {
  HeaderContainer,
  HeaderInner,
  HeaderText,
  HeaderTextBlue,
  HeaderForm,
} from "./styles/header.style";

function Header(props) {
  return (
    <HeaderContainer source={props.source}>
      <HeaderInner>
        <HeaderText>
          The Easiest Way <HeaderTextBlue>To Book</HeaderTextBlue>
          <br />
          Workforce Accommodation <br />
          Across Multiple Sites
        </HeaderText>
        <HeaderForm>{props.children}</HeaderForm>
      </HeaderInner>
    </HeaderContainer>
  );
}

export default Header;
