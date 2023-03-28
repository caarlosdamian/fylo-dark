import React from "react";
import { bgQuotes } from "../../assets";
import { Testimonial } from "../../utils";
import "./Card.scss";

export const Card = ({ item }: { item: Testimonial }) => {
  const { desc, id, img, name, title } = item;
  return (
    <div className="card">
      {id === "1b" && (
        <img src={bgQuotes} className="bgQuotes" alt="bgQuotes" />
      )}
      <div className="card__quote">{desc}</div>
      <div className="card__info">
        <img src={img} alt={img} className="card__info--img" />
        <div className="card__info--wrapper">
          <span className="name">{name}</span>
          <span className="title">{title}</span>
        </div>
      </div>
    </div>
  );
};
