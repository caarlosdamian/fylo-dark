import React from "react";
import { iconArrow, illustrationStayProductive } from "../../assets";
import "./Team.scss";

export const Team = () => {
  return (
    <section className="team">
      <img src={illustrationStayProductive} alt="illustrationStayProductive" />
      <div className="team__info">
        <h2 className="team__info--title">Stay productive, wherever you are</h2>
        <span className="team__info--desc">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </span>
        <span className="team__info--desc">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </span>
        <div className="team__info--button">
          <span className="button__label">See how Fylo works</span>
          <img src={iconArrow} alt={iconArrow} />
        </div>
      </div>
    </section>
  );
};
