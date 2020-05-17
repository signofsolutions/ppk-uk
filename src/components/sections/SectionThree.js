import React from "react";
import {
  SectionThreeContainer,
  SectionThreeInner,
  SectionSixTitle,
  SectionSixLead,
  SectionSixGrid,
  SectionSixGridItem,
  SectionCellTitle,
  SectionCellImage,
  SectionThreeRight,
  SectionThreeLeft,
  SectionSixImage,
} from "./styles/section.style";

function SectionThree() {
  return (
    <SectionThreeContainer color="#f3fdff">
      <SectionThreeInner>
        <SectionThreeRight>
          <SectionSixTitle>Why PPPN?</SectionSixTitle>
          <SectionSixLead>
            Try having one consolidated invoice for all your accommodation
            needs, instead of spreading it across multiple websites
          </SectionSixLead>
          <SectionSixImage
            src={require("../../assets/images/home/house.png")}
            alt="image"
          />
        </SectionThreeRight>
        <SectionThreeLeft>
          <SectionSixGrid>
            <SectionSixGridItem>
              <SectionCellImage
                src={require("../../assets/images/home/item5.png")}
                alt="image"
              />
              <SectionCellTitle>
                Nationwide accommodation inventory
              </SectionCellTitle>
            </SectionSixGridItem>
            <SectionSixGridItem>
              <SectionCellImage
                src={require("../../assets/images/home/item6.png")}
                alt="image"
              />
              <SectionCellTitle>Secure parking</SectionCellTitle>
            </SectionSixGridItem>
            <SectionSixGridItem>
              <SectionCellImage
                src={require("../../assets/images/home/item7.png")}
                alt="image"
              />
              <SectionCellTitle>WIFI ready to go</SectionCellTitle>
            </SectionSixGridItem>
            <SectionSixGridItem>
              <SectionCellImage
                src={require("../../assets/images/home/item8.png")}
                alt="image"
              />
              <SectionCellTitle>Kitchen facilities</SectionCellTitle>
            </SectionSixGridItem>
            <SectionSixGridItem>
              <SectionCellImage
                src={require("../../assets/images/home/item9.png")}
                alt="image"
              />
              <SectionCellTitle>Great cleaning standards</SectionCellTitle>
            </SectionSixGridItem>
            <SectionSixGridItem>
              <SectionCellImage
                src={require("../../assets/images/home/item10.png")}
                alt="image"
              />
              <SectionCellTitle>Workforces large and small</SectionCellTitle>
            </SectionSixGridItem>
          </SectionSixGrid>
        </SectionThreeLeft>
      </SectionThreeInner>
    </SectionThreeContainer>
  );
}

export default SectionThree;
