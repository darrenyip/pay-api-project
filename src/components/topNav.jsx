import React from "react";
import Burger from "../assets/shared/mobile/menu.svg";
import Close from "../assets/shared/mobile/close.svg";
import Logo from "../assets/shared/desktop/logo.svg";
const TopNav = () => {
  return (
    <nav className="top-navigation">
      <div className="nav-wpr">
        <div className="company-logo-wpr">
          <img src={Logo} alt="" className="companyLogo" />
        </div>
        <div className="nav-menu hidden-on-mobile">
          <ul>
            <li>
              <a href="">Prcing</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="burgerMenu hidden-on-desktop">
          <img src={Burger} alt="" className="burger-svg" />
        </div>
        <div className="sub-button hidden-on-mobile">
          <button className="btn btn-primary">Sechedule a Demo</button>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
