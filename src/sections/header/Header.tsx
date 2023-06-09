import React from "react";
import { logo } from "../../assets";
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
          <a key={item.id} href={item.url} className="header__links--link">
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
};
