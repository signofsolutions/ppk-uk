import React, { useState, useEffect } from "react";
import MultiBooking from "./MultiBooking";
import { growingData, ShowError } from "services";
import Booking from "./../../components/booking/Booking";
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  SectionSix,
} from "./../../components/sections";
import Navigation from "./../../components/layouts/navigation";
import Header from "./../../components/layouts/header";

function Index() {
  const [data, setData] = useState({});
  useEffect(() => {
    growingData()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
        // ShowError(err);
      });
  }, []);
  return (
    <div>
      <Navigation />
      <Header source={require("../../assets/images/home/header.png")}>
        <MultiBooking />
      </Header>
      <SectionOne
        sites={data.sites && data.sites}
        beds={data.beds && data.beds}
        town={data.town && data.town}
      />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Booking />
    </div>
  );
}

export default Index;
