import React from "react";

import PhoneMockup from "../assets/home/desktop/phone-mockup.svg";
import { ReactComponent as Tesla } from "../assets/shared/desktop/tesla.svg";
import { ReactComponent as FaceBook } from "../assets/shared/desktop/facebook.svg";
import { ReactComponent as Google } from "../assets/shared/desktop/google.svg";
import { ReactComponent as HpLogo } from "../assets/shared/desktop/hewlett-packard.svg";
import { ReactComponent as Linkedin } from "../assets/shared/desktop/linkedin.svg";
import { ReactComponent as Microsoft } from "../assets/shared/desktop/microsoft.svg";
import { ReactComponent as Nvidia } from "../assets/shared/desktop/nvidia.svg";
import { ReactComponent as Oracle } from "../assets/shared/desktop/oracle.svg";
import EzImp from "../assets/home/desktop/illustration-easy-to-implement.svg";
import simpleUI from "../assets/home/desktop/illustration-simple-ui.svg";

import PF from "../assets/home/desktop/icon-personal-finances.svg";
import BC from "../assets/home/desktop/icon-banking-and-coverage.svg";
import CP from "../assets/home/desktop/icon-consumer-payments.svg";

const Home = () => {
  return (
    <div className="home-hero">
      <div className="container hero-section">
        <img src={PhoneMockup} alt="" className="center" />
        <div className="text-section-wpr">
          <h2 className="center">
            Start building with our APIs for absolutely free.
          </h2>
          <div className="sub-fields">
            <div className="input-field-wpr">
              <input type="text" placeholder="Enter email address" />
              <button className="btn btn-primary">Schedule a Demo</button>
            </div>
            <p className="center">
              Have any questions? <a href="/">Contact Us</a>
            </p>
          </div>
        </div>
      </div>
      <div className=" parters">
        <div className="container font-white">
          <div className="flex-six">
            <div className="svg-wpr">
              <Tesla />
            </div>
            <div className="svg-wpr">
              <Microsoft />
            </div>
            <div className="svg-wpr">
              <HpLogo />
            </div>
            <div className="svg-wpr">
              <Oracle />
            </div>
            <div className="svg-wpr">
              <Google />
            </div>
            <div className="svg-wpr">
              <Nvidia />
            </div>
          </div>
          <h2 className="center font-white">Who we work with</h2>
          <p className="center">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <button className="btn btn-hollow">About Us</button>
        </div>
      </div>
      <div className="container img-with-text-secion" id="img-with-text-1">
        <img src={EzImp} alt="" />
        <h2 className="center">Easy to implement</h2>
        <p className="center">
          Our API comes with just a few lines of code. You’ll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease.
        </p>
      </div>
      <div
        className="container img-with-text-secion pb-0 "
        id="img-with-text-2"
      >
        <img src={simpleUI} alt="" className="center" />
        <h2 className="center">Simple UI & UX</h2>
        <p className="center">
          Our pre-built form is easy to integrate in your app or website’s
          checkout flow and designed to optimize conversion.
        </p>
      </div>
      <div className="container three-circle-section pb-0">
        <div className="single-circle-section">
          <img src={PF} alt="" className="single-circle-svg" />
          <h5 className="center publibsans">Personal Finances</h5>
          <p className="center">
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.
          </p>
        </div>
        <div className="single-circle-section">
          <img src={BC} alt="" className="single-circle-svg" />
          <h5 className="center publibsans">Banking & Coverage</h5>
          <p className="center">
            With our platform, you can speed up account onboarding and support
            ongoing payments for checking, savings, credit card, and brokerage
            accounts.
          </p>
        </div>
        <div className="single-circle-section mb-0">
          <img src={CP} alt="" className="single-circle-svg" />
          <h5 className="center publibsans">Consumer Payments</h5>
          <p className="center">
            It’s easier to set up secure bank payments with us through a flow
            designed with the user experience in mind. Customers could instantly
            authenticate their account.
          </p>
        </div>
      </div>
      <div className="container ready-to-start">
        <h2 className="center mb-3">Ready to Start?</h2>
        <div className="input-field-wpr">
          <input type="text" placeholder="Enter email address" />
          <button className="btn btn-primary">Schedule a Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
