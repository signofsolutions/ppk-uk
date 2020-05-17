import styled from "styled-components";

export const BookingContainer = styled.div`
  position: relative;
  padding-top: 8rem;
  margin-top: 10rem;
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    padding-top: 2rem;
  }
`;

export const BookingInner = styled.div`
  background: ${(props) => (props.source ? `url(${props.source})` : "#ccc")};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  color: white;
  width: 100%;
  height: 500px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    display: none;
  }

  @media (min-width: 1024px) {
    height: 700px;
  }

  @media (max-width: 720px) {
    height: 500px;
  }
`;

export const BookingBlueContainer = styled.div`
  position: absolute;
  background-color: #56ade2;
  box-shadow: -25px 30px #e8f5fb;
  width: 760px;
  max-width: 760px;
  border-radius: 0.5rem;
  padding: 4rem 2rem 20rem 2rem;
  margin: 0 auto;
  top: -8rem;
  z-index: -1;

  @media (max-width: 480px) {
    width: unset;
    max-width: unset;
    padding: 0 5px 0 5px;
  }
`;

export const BookingTitle = styled.div`
  color: white;
  font-family: "Oswald";
  font-size: 2rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const BookingTextSpan = styled.span`
  color: #282828;
`;

export const BookingLead = styled.div`
  color: white;
  font-family: "Oswald";
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  margin: 1rem 0;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;
