import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #212429;
  padding: 4rem 0;
  color: white;
  width: 100%;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    padding: 1rem;
  }
`;

export const FooterInner = styled.div`
  width: 960px;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const FooterNav = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: start;
  align-items: start;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    padding: 1rem;
    flex-direction: column;
  }
`;

export const FooterCopyright = styled.div`
  border-top: 1px solid #313439;
  color: #565c67;
  padding: 1rem 0;
  text-align: center;
  font-family: "Open Sans";
  width: 100%;
  font-size: 0.75rem;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const FooterLogo = styled.img`
  flex: 2;
  width: 72px;

  @media (max-width: 480px) {
    width: 50%;
    max-width: 50%;
    padding: 0;
    margin: 1rem 0;
  }
`;

export const FooterCol = styled.div`
  flex: 1;
  padding: 0 1rem;

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const FooterColTitle = styled.div`
  color: #fff;
  font-weight: bold;
  font-family: "Oswald";
`;

export const FooterList = styled.div`
  margin: 1rem 0;

  @media (max-width: 480px) {
  }
`;

export const FooterListItem = styled.div`
  font-family: "Open Sans";
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;

  &:hover {
    color: #52a6d0;
    cursor: pointer;
  }
`;

export const FooterDescrip = styled.div`
  font-family: "Open Sans";
  font-size: 0.75rem;
  margin: 1rem 0;
`;

export const FooterListItemIcon = styled.i`
  font-size: 1rem;
  margin-right: 0.2rem;
`;

export const FooterListItemLabel = styled.div``;
