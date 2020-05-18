import React from "react";
import {
  SectionContainer,
  SectionInner,
  SectionSixContainer,
  SectionSixRight,
  SectionSixLeft,
  SectionSixTitle,
  SectionSixImage,
  SectionSixSlider,
  BorderBottom,
} from "./styles/section.style";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  autoplay: false,
  arrows: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function SectionSix() {
  return (
    <SectionContainer color="transparent">
      <SectionInner>
        <SectionSixContainer>
          <SectionSixRight>
            <SectionSixTitle>Previous customers</SectionSixTitle>
            <BorderBottom style={{ justifyContent: "flex-start" }}>
              <div
                style={{
                  width: "80px",
                  height: "8px",
                  backgroundColor: "#2FADE2",
                }}
              />
              <div
                className="borderBottomCustomer"
                style={{
                  height: "8px",
                  backgroundColor: "#EEE",
                  marginLeft: "10px",
                }}
              />
            </BorderBottom>
            <SectionSixSlider>
              <Slider {...settings}>
                <div className="section-slider-item">
                  <div style={{ display: "flex", alignItems: "end" }}>
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        marginRight: "10px",
                      }}
                      src={require("../../assets/images/Quote.png")}
                      alt="quote"
                    />
                    <h3 className="section-slider-title">Ilec</h3>
                  </div>
                  <p className="section-slider-descrip">
                    We have been working with the PPPN team for some time now.
                    They are a fantastic company to work with and go out of
                    their way to adhere to any requirements we have. Our process
                    is to now use them as our go-to agents for all our
                    accommodation needs through the UK.
                  </p>
                  <img
                    src={require("../../assets/images/home/ILEC-LOGO.png")}
                    alt="image"
                    aria-hidden
                    className="section-slider-image"
                  />
                </div>
                <div className="section-slider-item">
                  <div style={{ display: "flex", alignItems: "end" }}>
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        marginRight: "10px",
                      }}
                      src={require("../../assets/images/Quote.png")}
                      alt="quote"
                    />
                    <h3 className="section-slider-title">Delivery Mates</h3>
                  </div>

                  <p className="section-slider-descrip">
                    Delivery Mates Having a vast international workforce in the
                    UK brings its challenges, We wanted to find a strong company
                    to work alongside with when it comes to finding and solving
                    our accommodation needs. The relationship we have built with
                    the PPPN team has been phenomenal, we have nothing but
                    praise for them and couldn’t recommend their services
                    enough.
                  </p>
                  <img
                    src={require("../../assets/images/home/ILEC-LOGO.png")}
                    alt="image"
                    aria-hidden
                    className="section-slider-image"
                  />
                </div>
                <div className="section-slider-item">
                  <div style={{ display: "flex", alignItems: "end" }}>
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        marginRight: "10px",
                      }}
                      src={require("../../assets/images/Quote.png")}
                      alt="quote"
                    />
                    <h3 className="section-slider-title">Daniel kemp</h3>
                  </div>

                  <p className="section-slider-descrip">
                    Couldn’t fault the service provided and the personal touch I
                    receive from our account manager Kelly, she always goes over
                    and above to make sure our team is accommodated even at late
                    notice and always with flexible terms, these guys truly
                    understand the nature of our business. We’ve been happy
                    customers since 2018 and long may it continue.
                  </p>
                  <img
                    src={require("../../assets/images/home/ILEC-LOGO.png")}
                    alt="image"
                    aria-hidden
                    className="section-slider-image"
                  />
                </div>
              </Slider>
            </SectionSixSlider>
          </SectionSixRight>
          <SectionSixLeft>
            <SectionSixImage
              src={require("../../assets/images/home/customers.png")}
              alt="image"
            />
          </SectionSixLeft>
        </SectionSixContainer>
      </SectionInner>
    </SectionContainer>
  );
}

export default SectionSix;
