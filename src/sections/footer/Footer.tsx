import React from "react";
import { iconEmail, iconLocation, iconPhone, logo } from "../../assets";
import { footerLinks, footerLinksContact, mediaIcons } from "../../utils";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="footer__logo" className="logo" />
      </div>
      <div className="footer__details">
        <div className="footer__details--info">
          <div className="footer__info--wrapper">
            <img src={iconLocation} alt="iconLocation" id="location" />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </span>
          </div>
        </div>
        <div className="footer__details--info">
          <div className="footer__info--wrapper">
            <img src={iconPhone} alt="iconLocation" />
            <span>+1-543-123-4567</span>
          </div>
          <div className="footer__info--wrapper">
            <img src={iconEmail} alt="iconLocation" />
            <span>example@fylo.com</span>
          </div>
        </div>
        <div className="footer__details--links">
          {footerLinks.map((item) => (
            <span className="list__item" key={item.id}>
              {item.label}
            </span>
          ))}
        </div>
        <div className="footer__details--links">
          {footerLinksContact.map((item) => (
            <span className="list__item" key={item.id}>
              {item.label}
            </span>
          ))}
        </div>
        <div className="footer__details--icons">
          {mediaIcons.map((item) => (
            <img key={item.id} alt={item.id} src={item.icon} />
          ))}
        </div>
      </div>
    </footer>
  );
};
