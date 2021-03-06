import React from "react";
import {
  SectionContainer,
  SectionInner,
  SectionFiveContainer,
  SectionFiveRight,
  SectionFiveLeft,
  SectionFiveTitle,
  SectionFiveImage,
  SectionFiveDescrip,
  BorderBottom,
} from "./styles/section.style";

function SectionFive() {
  return (
    <SectionContainer color="#f3fdff">
      <SectionInner>
        <SectionFiveContainer>
          <SectionFiveRight>
            <SectionFiveImage
              src={require("../../assets/images/home/yourself.png")}
              alt="image"
            />
          </SectionFiveRight>
          <SectionFiveLeft>
            <SectionFiveTitle>
              Done For You Service Or Do It Yourself
            </SectionFiveTitle>
            <BorderBottom style={{ justifyContent: "flex-start" }}>
              <div
                style={{
                  width: "80px",
                  height: "8px",
                  backgroundColor: "#2FADE2",
                }}
              />
              <div
                style={{
                  width: "180px",
                  height: "8px",
                  backgroundColor: "#EEE",
                  marginLeft: "10px",
                }}
              />
            </BorderBottom>
            <SectionFiveDescrip>
              Once we know your criteria you can sit back and leave the rest to
              us. Now it's time to sit back and relax while we deploy our
              Hospitality Hustlers to communicate and negotiate the best rates
              on your behalf. Or you can simply complete the booking online
              yourself if you prefer or have the time
            </SectionFiveDescrip>
          </SectionFiveLeft>
        </SectionFiveContainer>
      </SectionInner>
    </SectionContainer>
  );
}

export default SectionFive;
