import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: ${(props) => (props.source ? `url(${props.source})` : "#212429")};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  color: white;
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: baseline;

  @media (max-width: 480px) {
    align-items: baseline;
  }
`;

export const HeaderInner = styled.div`
  width: 960px;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    padding: 1rem;
    flex-direction: column;
  }
`;

export const HeaderText = styled.div`
  color: #56ade2;
  font-family: "Oswald";
  font-size: 2rem;
  font-weight: bold;
  padding: 0 4rem 0 0;
  margin-top: 45px;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 0 2rem 0 0;
    margin: unset;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
    margin: 4rem 0;
  }
`;

export const HeaderTextBlue = styled.span`
  font-family: "Oswald";
  color: #212529;
`;

export const HeaderForm = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: rgb(221, 234, 255) -2px 0px 8px;
  position: absolute;
  right: 180px;
  top: 130px;
  width: 400px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(232, 245, 251);

  @media (max-width: 480px) {
    right: 5px;
    top: 480px;
    width: 365px;
  }

  @media screen and (device-width: 360px) and (device-height: 640px) {
    right: 5px;
    top: 480px;
    width: 348px;
  }
`;
