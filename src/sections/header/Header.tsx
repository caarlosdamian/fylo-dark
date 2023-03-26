import React from "react";
import { bgCurvyMobile, logo } from "../../assets";
import { navLinks } from "../../utils";
import "./Header.scss";

export const Header = () => {
  return (
    <nav className="header">
      <div className="header__logo">
        <img src={logo} alt={logo} />
      </div>
      <div className="header__links">
        {navLinks.map((item) => (
          <a key={item.id} href="" className="header__links--link">{item.title}</a>
        ))}
      </div>
    </nav>
  );
};
