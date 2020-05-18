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
  SectionFourBoxMainTitle, BorderBottom,
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
        <BorderBottom>
          <div style={{width: "80px", height: "8px", backgroundColor: "#2FADE2"}}/>
          <div style={{width: "180px", height: "8px", backgroundColor: "#EEE", marginLeft: "10px"}}/>
        </BorderBottom>
        <SectionFourContainer>
          <SectionFourRight>
            <Slider {...settings} className="steps-slider">
              <SectionFourBox>
                <img style={{width: "inherit"}} src={require("../../assets/images/Step-1-SLider.png")} alt="1"/>
                {/*<SectionFourBoxMainTitle>01</SectionFourBoxMainTitle>*/}
                {/*<SectionFourBoxTitle>Step 1: Your teams</SectionFourBoxTitle>*/}
              </SectionFourBox>
              <SectionFourBox>
                <img style={{width: "inherit"}} src={require("../../assets/images/Step-2-Slider.png")} alt="1"/>
                {/*<SectionFourBoxMainTitle>02</SectionFourBoxMainTitle>*/}
                {/*<SectionFourBoxTitle>Step 2: Work-site information</SectionFourBoxTitle>*/}
              </SectionFourBox>
              <SectionFourBox>
                <img style={{width: "inherit"}} src={require("../../assets/images/Step-3-Slider.png")} alt="1"/>
                {/*<SectionFourBoxMainTitle>03</SectionFourBoxMainTitle>*/}
                {/*<SectionFourBoxTitle>Step 3: Your Budget & Parking</SectionFourBoxTitle>*/}
              </SectionFourBox>
              <SectionFourBox>
                <img style={{width: "inherit"}} src={require("../../assets/images/STep-4-Slider.png")} alt="1"/>
                {/*<SectionFourBoxMainTitle>04</SectionFourBoxMainTitle>*/}
                {/*<SectionFourBoxTitle>Step 4: Check-in/out Dates</SectionFourBoxTitle>*/}
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
