import React from "react";
import {
  SectionContainer,
  SectionInner,
  SectionTitle,
  SectionLead,
  SectionFourGrid,
  SectionFourGridItem,
  SectionCellTitle,
  SectionCellDescrip,
  SectionCellImage,
} from "./styles/section.style";

function SectionTwo() {
  return (
    <SectionContainer color="#fff">
      <SectionInner>
        <SectionTitle>
          Our Amazing <br />{" "}
          <span>
            Contractor <br />
            <img
              style={{marginTop: "-75px"}}
              src={require("../../assets/images/B_Border_Back.png")}
              alt="bottom"
            />
          </span>
        </SectionTitle>
        <SectionLead>Accommodation Management at its finest</SectionLead>
        <SectionFourGrid>
          <SectionFourGridItem>
            <SectionCellImage
              src={require("../../assets/images/home/item1.png")}
              alt="image"
            />
            <SectionCellTitle>Save Time</SectionCellTitle>
            <SectionCellDescrip>
              Booking from the broadcast curated collection of contractor
              focused investory in the country will save you time for you to get
              on with other important tasks.
            </SectionCellDescrip>
          </SectionFourGridItem>
          <SectionFourGridItem>
            <SectionCellImage
              src={require("../../assets/images/home/item2.png")}
              alt="image"
            />
            <SectionCellTitle>Hospitality Hustlers</SectionCellTitle>
            <SectionCellDescrip>
              Our dedicated team of highly experienced Accommodation Agents are
              on hand around the clock for your contractors needs
            </SectionCellDescrip>
          </SectionFourGridItem>
          <SectionFourGridItem>
            <SectionCellImage
              src={require("../../assets/images/home/item3.png")}
              alt="image"
            />
            <SectionCellTitle>Consolidated invoicing</SectionCellTitle>
            <SectionCellDescrip>
              Try having one consolidated invoice for all your accommodation
              needs, instead of spreading it across multiple websites
            </SectionCellDescrip>
          </SectionFourGridItem>
          <SectionFourGridItem>
            <SectionCellImage
              src={require("../../assets/images/home/item4.png")}
              alt="image"
            />
            <SectionCellTitle>Duty of Care</SectionCellTitle>
            <SectionCellDescrip>
              Track, monitor and get real time reporting for all your workforce
              accommodation, so you can quickly locate all your current
              contractors.
            </SectionCellDescrip>
          </SectionFourGridItem>
        </SectionFourGrid>
      </SectionInner>
    </SectionContainer>
  );
}

export default SectionTwo;
