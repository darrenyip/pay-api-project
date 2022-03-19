import React, { Component } from "react";
import designLogo from "./../assets/design-page-logo.svg";

class DesignPage extends Component {
  state = {};
  render() {
    return (
      <div className="designSystem">
        <div className="design-page-top-nav">
          <div className="top-nav-bg-circle"></div>
          <div className="design-page-top-nav-inner">
            <div className="logo-wrap">
              <div className="logo-wrap-logo">
                <img src={designLogo} alt="design-page-logo" />
              </div>
              <p className="font-white">
                <span className="f-bold">pay</span>
                <span>api</span>
              </p>
            </div>
            <div className="design-page-name font-white">
              <h1>Design System</h1>
            </div>
          </div>
        </div>
        <div className="design-page-main">
          <div className="design-page-main--color ">
            <div className="title"></div>
          </div>
          <div className="design-page-main--typography"></div>
          <div className="design-page-main--buttons"></div>
          <div className="design-page-main--form-elements"></div>
        </div>
      </div>
    );
  }
}
export default DesignPage;
