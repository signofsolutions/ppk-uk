import React from "react";
//styles
import "./home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/index.scss";
//sections
import Header from "../paritals/header/Header";
import Footer from "../paritals/footer/Footer";
import { Images } from "utils/image";
import GetStarted from "components/getstarted/GetStarted";
import Slider from "react-slick";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="banner-outer">
        <div className="banner-overly"></div>
        <div className="banner-inner">
          <div className="container">
            <div className="row section-flex-row">
              <div className="col-8">
                <div className="title">
                  More <span className="blue-color font-base">Bookings,</span>{" "}
                  <br />
                  Increase Revenue!
                </div>
                <div className="pppn-divider">
                  <div className="pppn-divider-blue"></div>
                  <div className="pppn-divider-gray"></div>
                </div>
                <ul className="banner-list">
                  <li>We do all, you just get paid</li>
                  <li>Attract workforces large and small</li>
                  <li>Hands off Guest management</li>
                  <li>Join nationwide accommodation inventory</li>
                  <li>Experience hands-off guest management</li>
                </ul>
              </div>
              <div className="col">
                <div className="signup-card">
                  <div className="signup-title">Sign-up Form</div>
                  <div className="signup-body">
                    <GetStarted />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sections-list-container">
        <div className="section-title">
          <h1>Why Join PPPN?</h1>
        </div>

        <div className="section-row">
          <div className="container">
            <div className="row section-flex-row align-items-center">
              <div className="col section-col">
                <img
                  src={Images.Home1}
                  className="section-image"
                  alt="We Deal with inquiries"
                />
              </div>
              <div className="col section-col">
                <h1 className="section-smaller-title">
                  We Deal with inquiries
                </h1>
                <div className="text">
                  From the initial inquiry to the checkout, the whole process is
                  fully managed. All you need to do is, confirm availability,
                  confirm the price, and leave the rest to us.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-row">
          <div className="container">
            <div className="row section-flex-row align-items-center">
              <div className="col section-col">
                <h1 className="section-smaller-title">
                  We Manage guests relations
                </h1>
                <div className="text">
                  All our clients have 24/7 support from our in house account
                  managers, so those late night calls from disgruntled guests
                  are a thing of the past, we’ll personally handle the guest
                  communications so you don’t have to.
                </div>
              </div>
              <div className="col section-col">
                <img
                  src={Images.Home2}
                  className="section-image"
                  alt="We Manage guests relations"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section-row">
          <div className="container">
            <div className="row section-flex-row align-items-center">
              <div className="col section-col">
                <img
                  src={Images.Home3}
                  className="section-image"
                  alt="We Take payments"
                />
              </div>
              <div className="col section-col">
                <h1 className="section-smaller-title">We Take payments</h1>
                <div className="text">
                  We manage the client vetting process and take payments on your
                  behalf, saving you the time, energy and effort to do your own
                  due diligence. You can rest assured your property is in good
                  hands when taking bookings from PPPN.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-row">
          <div className="container">
            <div className="row section-flex-row align-items-center">
              <div className="col section-col">
                <h1 className="section-smaller-title">Fill your weekdays</h1>
                <div className="text">
                  We take a high level of Monday - Friday bookings, This gives
                  you the opportunity to improve your bottom line and increase
                  your occupancy with high-value weekend bookings.
                </div>
              </div>
              <div className="col section-col">
                <img
                  src={Images.Home4}
                  className="section-image"
                  alt="Fill your weekdays"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section-row blue-bg-section hidden-xs">
          <div className="container">
            <div className="row section-flex-row">
              <div className="col-6 section-col">
                <h1
                  className="section-small-title"
                  style={{ marginBottom: "2px" }}
                >
                  Current Clients
                </h1>
                <div className="pppn-divider">
                  <div className="pppn-divider-blue-clients" />
                  <div className="pppn-divider-gray-clients" />
                </div>
                <div className="section-slider">
                  <Slider {...settings}>
                    <div className="section-slider-item">
                      <h3 className="section-slider-title">Ilec</h3>
                      <p className="section-slider-descrip">
                        We have been working with the PPPN team for some time
                        now. They are a fantastic company to work with and go
                        out of their way to adhere to any requirements we have.
                        Our process is to now use them as our go-to agents for
                        all our accommodation needs through the UK.
                      </p>
                      <img
                        src={Images.ilecLogo}
                        alt="image"
                        aria-hidden
                        className="section-slider-image"
                      />
                    </div>
                    <div className="section-slider-item">
                      <h3 className="section-slider-title">Delivery Mates</h3>
                      <p className="section-slider-descrip">
                        Delivery Mates Having a vast international workforce in
                        the UK brings its challenges, We wanted to find a strong
                        company to work alongside with when it comes to finding
                        and solving our accommodation needs. The relationship we
                        have built with the PPPN team has been phenomenal, we
                        have nothing but praise for them and couldn’t recommend
                        their services enough.
                      </p>
                      <img
                        src={Images.deliveryMatesLogo}
                        alt="image"
                        aria-hidden
                        className="section-slider-image"
                      />
                    </div>
                    <div className="section-slider-item">
                      <h3 className="section-slider-title">Daniel kemp</h3>
                      <p className="section-slider-descrip">
                        Couldn’t fault the service provided and the personal
                        touch I receive from our account manager Kelly, she
                        always goes over and above to make sure our team is
                        accommodated even at late notice and always with
                        flexible terms, these guys truly understand the nature
                        of our business. We’ve been happy customers since 2018
                        and long may it continue.
                      </p>
                      <img
                        src={Images.ilecLogo}
                        alt="image"
                        aria-hidden
                        className="section-slider-image"
                      />
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="col section-col p-4">
                <img
                  src={Images.Home8}
                  className="section-image"
                  alt="Current Clients"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section-row">
          <div className="container">
            <div className="d-flex justify-content-center section-col">
              <div className="image-holder-checks d-flex justify-content-center">
                <img
                  src={Images.Home10}
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
                  <p>
                    As you’re creating your listing, we’ll ask you the questions
                    that guests want to know about when booking. You’ll describe
                    your home, providing details like what’s special about the
                    space, including any quirks they can expect. You’ll describe
                    your home, providing details like what’s special about the
                    space, including any quirks they can expect. As you’re
                    creating your listing, we’ll ask you the questions that
                    guests want to know about when booking.
                  </p>
                  <div className="section-actions">
                    <button className="btn btn-custom">Get Started</button>
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

        <div className="section-row blue-bg-section">
          <div className="container">
            <div className="row section-flex-row align-items-center">
              <div className="col section-col">
                <h1
                  className="section-small-title"
                  style={{ marginBottom: "2px" }}
                >
                  Our Mission
                </h1>
                <div className="pppn-divider">
                  <div className="pppn-divider-blue-mission" />
                  <div className="pppn-divider-gray-mission" />
                </div>
                <div className="text">
                  Our mission is to help improve the whole experience from
                  booking to bed and beyond for our client’s and host’s alike,
                  and we’ll do this by our unique blend of market and industry
                  insights, personal and professional relationships mixed with
                  cutting edge bespoke technology. The reality is, simply no one
                  else does it quite like us.
                </div>
              </div>
              <div className="col section-col">
                <img
                  src={Images.Home9}
                  className="section-image"
                  alt="Our Mission"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="blue-bg-section row align-items-center" style={{marginRight: "0"}}>
          <div className="col-md-6 col-sm-12 hidden-xs">
            <img
              style={{ width: "inherit" }}
              src={Images.Home7}
              className="section-medium-image"
              alt="Fill your properties up all year round"
            />
          </div>
          <div className="col-md-6 col-sm-12 pro-padding">
            <h1 className="section-small-title mb-0">
              Fill your properties up all year round
            </h1>
            <div className="pppn-divider">
              <div className="pppn-divider-blue" />
              <div className="pppn-divider-gray" />
            </div>
            <div className="text">
              Experience the benefits and power of our unique booking engine,
              We’ve created a bespoke calendar that allows our clients to book
              multiple properties over multiple weeks all at the click of a few
              buttons. Drastically reducing the time it would take to make the
              bookings individually, and encouraging them to book further in
              advance than what they typically would. This results in you the
              host receiving more bookings and more revenue.
              <br />
              <button className="btn btn-custom mt-4">Get Started</button>
            </div>
          </div>
        </div>

        <div className="section-row">
          <div className="section-title text-center">
            <h2 className="mb-0">FAQ’s</h2>
            <div className="pppn-divider">
              <div className="pppn-divider-gray-faq" />
              <div className="pppn-divider-blue-faq" />
            </div>
          </div>
          <div className="container">
            <div className="row section-flex-row">
              <div className="col section-col">
                <div className="faq-background">
                  <div className="faq-row">
                    <p className="faq-question">
                      Q: When adding my listing do you take into account sofa
                      beds?
                    </p>
                    <p className="faq-answer">
                      A: Unfortunately no, in fact, all beds regardless of size
                      should be listed as sleeping just one.
                    </p>
                  </div>
                  <div className="faq-row">
                    <p className="faq-question">
                      Q: How much commission do you charge?
                    </p>
                    <p className="faq-answer">
                      A: We charge a 10% commission on all bookings.
                    </p>
                  </div>
                  <div className="faq-row">
                    <p className="faq-question">Q: Do you charge VAT?</p>
                    <p className="faq-answer">
                      A: No, not currently, but will soon. Notifications will be
                      sent to all host’s regarding this change.
                    </p>
                  </div>
                  <div className="faq-row">
                    <p className="faq-question">
                      Q: How does the revenue model work and what would you
                      charge us?
                    </p>
                    <p className="faq-answer">
                      A: We will take inquiries on your behalf and reach out
                      personally to see if you have availability and confirm
                      price, etc, we then take payment and charge a 10%
                      commission on bookings. The remainder will be paid out
                      either on the day of check-in if bank transfer, or up to 3
                      days after depending on how the funds were charged, eg
                      Stripe.
                    </p>
                  </div>
                  <div className="faq-row">
                    <p className="faq-question">
                      Q: What are the cancellation terms?
                    </p>
                    <p className="faq-answer">
                      A: Flexible …. We know our client’s contracts can get
                      cancelled at the last minute, So if this was to occur we
                      would issue a refund of 90% and waive our 10% commission
                      and pass onto you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col section-col">
                <img src={Images.Home6} className="section-image" alt="FAQ’s" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-row hidden-xs">
          <div className="container">
            <div className="d-flex justify-content-center section-col">
              <div className="image-holder d-flex justify-content-center">
                <img src={Images.Home5} alt="Ready to Get Started?" />
                <div className="image-text-overly">
                  <h1 className="image-title">
                    Ready to Get <br />
                    Started?
                  </h1>
                  <div className="section-actions">
                    <button className="btn btn-custom">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
