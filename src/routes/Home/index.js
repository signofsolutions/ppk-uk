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
import { SignInButton } from "../../components/layouts/styles/nav.style";

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

      <div className="section-row">
        <div className="container">
          <div className="d-flex justify-content-center section-col">
            <div className="image-holder-checks d-flex justify-content-center">
              <img
                src={require("../../assets/images/home10.png")}
                className="section-image"
                alt="Book Multiple Check-in/outs at Once!"
              />
              <div className="image-text-overly-checks">
                <h1 className="image-title" style={{ marginBottom: "2px" }}>
                  Book Multiple Check-in/outs at Once!
                </h1>
                <div className="pppn-divider">
                  <div className="pppn-divider-blue-book" />
                  <div className="pppn-divider-gray-book" />
                </div>
                <p style={{ fontSize: "16px" }}>
                  Experience our super fast search engine, the only facility
                  that will allow you to book for multiple teams, across
                  multiple locations, and multiple dates in one single
                  transaction. Gone are the days of making various transactions
                  to accommodate your workforce.
                </p>
                <div className="section-actions">
                  <SignInButton>Get Started</SignInButton>
                  {/*<button className="btn btn-custom">Get Started</button>*/}
                </div>
              </div>
              {/*<div className="col section-col">*/}
              {/*  <h1 className="section-small-title">*/}
              {/*    Book Multiple Check-in/outs at Once!*/}
              {/*  </h1>*/}
              {/*  <div className="text">*/}
              {/*    As you’re creating your listing, we’ll ask you the questions*/}
              {/*    that guests want to know about when booking. You’ll describe*/}
              {/*    your home, providing details like what’s special about the*/}
              {/*    space, including any quirks they can expect. You’ll describe*/}
              {/*    your home, providing details like what’s special about the*/}
              {/*    space, including any quirks they can expect. As you’re*/}
              {/*    creating your listing, we’ll ask you the questions that*/}
              {/*    guests want to know about when booking.*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
        {/*<div className="container">*/}
        {/*  <div className="row section-flex-row align-items-center">*/}
        {/*    <div className="col section-col">*/}
        {/*      <img*/}
        {/*        src={Images.Home10}*/}
        {/*        className="section-image"*/}
        {/*        alt="Book Multiple Check-in/outs at Once!"*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*    <div className="col section-col">*/}
        {/*      <h1 className="section-small-title">*/}
        {/*        Book Multiple Check-in/outs at Once!*/}
        {/*      </h1>*/}
        {/*      <div className="text">*/}
        {/*        As you’re creating your listing, we’ll ask you the questions*/}
        {/*        that guests want to know about when booking. You’ll describe*/}
        {/*        your home, providing details like what’s special about the*/}
        {/*        space, including any quirks they can expect. You’ll describe*/}
        {/*        your home, providing details like what’s special about the*/}
        {/*        space, including any quirks they can expect. As you’re*/}
        {/*        creating your listing, we’ll ask you the questions that guests*/}
        {/*        want to know about when booking.*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>

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
