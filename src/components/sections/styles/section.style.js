import styled from "styled-components";

export const SectionContainer = styled.div`
  background-color: ${(props) => props.color};
  padding: 2rem 0;
  color: white;
`;

export const SectionInner = styled.div`
  width: 960px;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    padding: 1rem;
  }
`;

export const SectionTitle = styled.div`
  color: #282828;
  font-family: "Oswald";
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

export const BorderBottom = styled.div`
  display: flex;
  flex-direction: row;
  color: red;
  justify-content: center;
`;

export const SectionLead = styled.div`
  color: #54595f;
  font-family: "Open Sans";
  font-size: 1.2rem;
  text-align: center;
  margin: 1rem 0;
  font-style: italic;

  @media (max-width: 480px) {
    margin: 0;
    font-size: 1rem;
  }
`;

export const SectionFourGrid = styled.div`
  width: 600px;
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto;
  margin: 2rem auto;

  @media (max-width: 480px) {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    grid-template-columns: unset;
  }
`;

export const SectionFourGridItem = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  &:nth-child(1) {
    border-bottom: 2px dashed #c7d9e3;

    @media (max-width: 480px) {
      border: 0;
    }
  }

  &:nth-child(2) {
    border-left: 2px dashed #c7d9e3;
    border-bottom: 2px dashed #c7d9e3;

    @media (max-width: 480px) {
      border: 0;
    }
  }

  &:nth-child(4) {
    border-left: 2px dashed #c7d9e3;

    @media (max-width: 480px) {
      border: 0;
    }
  }
`;

export const SectionCellTitle = styled.h1`
  color: #282828;
  font-family: "Open Sans";
  font-size: 1rem;
  text-align: center;
  margin: 0;
`;

export const SectionCellDescrip = styled.p`
  color: #666;
  font-family: "Open Sans";
  font-size: 0.875rem;
  text-align: center;
  margin-top: 15px;
  font-style: italic;
`;

export const SectionCellImage = styled.img`
  margin: 1rem;
`;

export const SectionThreeContainer = styled.div`
  background-color: ${(props) => props.color};
  padding: 4rem 0;
  color: white;
`;

export const SectionThreeInner = styled.div`
  width: 960px;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    padding: 0rem;
    flex-direction: column;
  }
`;

export const SectionThreeRight = styled.div`
  flex: 2;

  @media (max-width: 480px) {
    margin: 2rem;
  }
`;

export const SectionThreeLeft = styled.div`
  flex: 4;
`;

export const SectionSixGrid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto;
  margin: 2rem auto;

  @media (max-width: 480px) {
    grid-template-columns: auto;
  }
`;

export const SectionSixGridItem = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const SectionSixTitle = styled.h1`
  color: #282828;
  font-family: "Oswald";
  font-size: 2.4rem;
  text-align: left;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SectionSixLead = styled.p`
  color: #666;
  font-family: "Open Sans";
  font-size: 0.7rem;
  font-style: italic;
  text-align: left;
  margin-top: 30px;
`;

export const SectionSixImage = styled.img`
  margin-top: 30px;
  width: 100%;
`;

export const SectionFiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const SectionFiveRight = styled.div`
  flex: 2;
  padding: 2rem 0;
`;

export const SectionFiveLeft = styled.div`
  flex: 4;
  padding: 2rem;
`;

export const SectionFiveTitle = styled.h1`
  color: #282828;
  font-family: "Oswald";
  font-size: 2.4rem;
  text-align: left;
  margin: 0;
`;

export const SectionFiveDescrip = styled.p`
  color: #54595f;
  font-family: "Open Sans";
  font-size: 1rem;
  text-align: left;
  font-style: italic;
  margin-top: 30px;
  font-size: 0.7rem;
`;

export const SectionFiveImage = styled.img`
  margin: 0rem;
  width: 100%;
`;

export const SectionFourBox = styled.div`
  // padding: 2rem;
  background-color: white !important;
  color: rgb(81, 165, 207);
  font-weight: bold;
  font-family: "Open Sans";
  // box-shadow: rgb(221, 234, 255) -2px 0px 8px;
`;

export const SectionSixContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const SectionSixRight = styled.div`
  flex: 4;
  padding: 0 2rem;

  @media screen and (device-width: 360px) and (device-height: 640px) {
    padding: unset;
  }
`;

export const SectionSixLeft = styled.div`
  flex: 2;
  padding: 2rem;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const SectionSixDescrip = styled.p`
  color: #666;
  font-family: "Open Sans";
  font-size: 1rem;
  text-align: left;
`;

export const SectionSixSlider = styled.div`
  width: 500px;
  margin: 1rem 0;

  @media (max-width: 480px) {
    width: 310px;
    margin: 0;
  }
`;

export const SectionFourContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const SectionFourRight = styled.div`
  flex: 4;
  padding: 2rem;

  @media (max-width: 480px) {
    padding: unset;
  }
`;

export const SectionFourLeft = styled.div`
  flex: 2;
  padding: 2rem 0;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const SectionFourBoxTitle = styled.h1`
  color: #282828;
  font-family: "Open Sans";
  font-size: 1.2rem;
  text-align: left;
  margin: 0;
  font-weight: bold;
`;

export const SectionFourBoxMainTitle = styled.h1`
  color: #509fe4;
  font-family: "Oswald";
  font-size: 8rem;
  text-align: left;
  margin: 0;
  font-weight: bold;

  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const SectionFourDescrip = styled.p`
  color: #666;
  font-family: "Open Sans";
  font-size: 1rem;
  text-align: left;
`;

export const SectionFourImage = styled.img`
  margin: 0rem;
`;

export const SectionOneContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 2rem 0;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const SectionOneMainTitle = styled.div`
  color: #56ade2;
  border-left: 8px solid;
  padding: 5px;
  font-family: "Oswald";
  font-size: 1.6rem;
  text-align: left;
  margin: 1rem 0;
  line-height: 1;
`;

export const SectionOneSubTitle = styled.div`
  color: #56ade2;
  font-family: "Oswald";
  border-left: 8px solid #eeeeee;
  padding: 5px;
  font-size: 4rem;
  font-weight: bold;
  text-align: left;
  line-height: 1;
`;

export const SectionOneRight = styled.div`
  flex: 4;
  padding: 0 4rem;
`;

export const SectionOneLeft = styled.div`
  flex: 2;
`;

export const StatisticsCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  border: 2px solid #e8f5fb;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: -15px 15px 2px #e8f5fb;
  padding: 2rem;
`;

export const StatisticsCardCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 1rem;

  &:nth-child(1) {
    border-right: 2px dashed #c7d9e3;
  }

  &:nth-child(2) {
    border-right: 2px dashed #c7d9e3;
  }
`;

export const StatisticsCardTitle = styled.div`
  color: #56ade2;
  font-family: "Oswald";
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
`;

export const StatisticsCardSubTitle = styled.div`
  color: #56ade2;
  font-family: "Oswald";
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  line-height: 1;
`;

export const StatisticsCardImage = styled.img`
  width: 56px;
  margin: 0 auto 2rem auto;
`;

export const StatisticsOnline = styled.img`
  background-color: #7bfcaa;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 0;
`;
