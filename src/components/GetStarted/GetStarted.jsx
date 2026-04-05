import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Abhi</span>
          <span className="secondaryText">
            Thankyou for visit Website.
            <br />
            Please Select your best house
          </span>
          <a className="button" href="abhishek@gmail.com">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;