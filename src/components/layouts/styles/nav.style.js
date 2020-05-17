import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
`;

export const NavInner = styled.div`
  width: 960px;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    padding: 1rem;
  }
`;

export const NavItemBrand = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`;

export const NavItemMenu = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const NavItemAccount = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  align-items: center;

  @media (max-width: 480px) {
  }
`;

export const NavLogo = styled.img``;

export const BookNowButton = styled.button`
  border-radius: 200px;
  padding: 0.4rem 1rem;
  margin-right: 0.5rem;
  outline: 0;
  border: 2px solid #e8f5fb;
  background-color: white;
  color: #51a5cf;
  font-weight: bold;
  font-family: "Open Sans";
  box-shadow: -2px 0px 8px #ddeaff;

  &:hover {
    cursor: pointer;
  }
`;
export const SignInButton = styled.a`
  border-radius: 200px;
  padding: 0.4rem 1rem;
  outline: 0;
  border: 2px solid #56ade2;
  background-color: #56ade2;
  color: #fff;
  font-weight: bold;
  font-family: "Open Sans";
  font-size: 16px;
  box-shadow: -2px 0px 8px #ddeaff;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: #fff;
  }
`;
