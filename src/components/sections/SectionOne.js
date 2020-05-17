import React from "react";
import {
  SectionContainer,
  SectionInner,
  SectionOneContainer,
  SectionOneRight,
  SectionOneLeft,
  SectionOneMainTitle,
  SectionOneSubTitle,
  StatisticsCard,
  StatisticsCardCol,
  StatisticsCardTitle,
  StatisticsCardSubTitle,
  StatisticsCardImage,
  StatisticsOnline,
} from "./styles/section.style";

function SectionOne(props) {
  return (
    <SectionContainer color="transparent">
      <SectionInner>
        <SectionOneContainer>
          <SectionOneLeft>
            <SectionOneMainTitle>Contractor Accommodation</SectionOneMainTitle>
            <SectionOneSubTitle>
              Growing <br /> Fast
            </SectionOneSubTitle>
          </SectionOneLeft>
          <SectionOneRight>
            <StatisticsCard>
              <StatisticsCardCol>
                <StatisticsOnline />
                <StatisticsCardImage
                  src={require("../../assets/images/home/sites.png")}
                  alt="image"
                />
                <StatisticsCardTitle>{props.sites}</StatisticsCardTitle>
                <StatisticsCardSubTitle>Sites</StatisticsCardSubTitle>
              </StatisticsCardCol>
              <StatisticsCardCol>
                <StatisticsOnline />
                <StatisticsCardImage
                  src={require("../../assets/images/home/beds.png")}
                  alt="image"
                />
                <StatisticsCardTitle>{props.beds}</StatisticsCardTitle>
                <StatisticsCardSubTitle>Beds</StatisticsCardSubTitle>
              </StatisticsCardCol>
              <StatisticsCardCol>
                <StatisticsOnline />
                <StatisticsCardImage
                  src={require("../../assets/images/home/towns.png")}
                  alt="image"
                />
                <StatisticsCardTitle>{props.town}</StatisticsCardTitle>
                <StatisticsCardSubTitle>Towns</StatisticsCardSubTitle>
              </StatisticsCardCol>
            </StatisticsCard>
          </SectionOneRight>
        </SectionOneContainer>
      </SectionInner>
    </SectionContainer>
  );
}

export default SectionOne;
