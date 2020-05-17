import React from "react";
import {
  SectionContainer,
  SectionInner,
  SectionTitle,
  SectionFourContainer,
  SectionFourRight,
  SectionFourLeft,
  SectionFourBoxTitle,
  SectionFourImage,
  SectionFourBox,
  SectionFourBoxMainTitle,
} from "./styles/section.style";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  autoplay: false,
  arrows: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function SectionFour() {
  return (
    <SectionContainer>
      <SectionInner>
        <SectionTitle>4 Steps Proccess</SectionTitle>
        <SectionFourContainer>
          <SectionFourRight>
            <Slider {...settings} className="steps-slider">
              <SectionFourBox>
                <SectionFourBoxMainTitle>01</SectionFourBoxMainTitle>
                <SectionFourBoxTitle>Step 1: Your teams</SectionFourBoxTitle>
              </SectionFourBox>
              <SectionFourBox>
                <SectionFourBoxMainTitle>02</SectionFourBoxMainTitle>
                <SectionFourBoxTitle>Step 2: Work-site information</SectionFourBoxTitle>
              </SectionFourBox>
              <SectionFourBox>
                <SectionFourBoxMainTitle>03</SectionFourBoxMainTitle>
                <SectionFourBoxTitle>Step 3: Your Budget & Parking</SectionFourBoxTitle>
              </SectionFourBox>
              <SectionFourBox>
                <SectionFourBoxMainTitle>04</SectionFourBoxMainTitle>
                <SectionFourBoxTitle>Step 4: Check-in/out Dates</SectionFourBoxTitle>
              </SectionFourBox>
            </Slider>
          </SectionFourRight>
          <SectionFourLeft>
            <SectionFourImage
              src={require("../../assets/images/home/process.png")}
              alt="image"
            />
          </SectionFourLeft>
        </SectionFourContainer>
      </SectionInner>
    </SectionContainer>
  );
}

export default SectionFour;
