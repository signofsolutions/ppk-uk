import React from "react";
import {
  BookingContainer,
  BookingInner,
  BookingBlueContainer,
  BookingTitle,
  BookingLead,
  BookingTextSpan,
} from "./styles/booking.style";

export default function Footer() {
  return (
    <BookingContainer>
      <BookingBlueContainer>
        <BookingTitle>
          Book Your PPPN Bed <BookingTextSpan>Today</BookingTextSpan>
        </BookingTitle>
        <BookingLead>
          <BookingTextSpan>SAVE MONEY</BookingTextSpan> AND BE MORE COMFORTABLE
          WITH PER PERSON PER NIGHT!
        </BookingLead>
      </BookingBlueContainer>
      <BookingInner
        source={require("../../assets/images/home/footer.png")}
        alt="image"
      ></BookingInner>
    </BookingContainer>
  );
}
