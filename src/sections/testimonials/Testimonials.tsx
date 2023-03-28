import React from "react";
import { Slide } from "react-awesome-reveal";
import { bgQuotes } from "../../assets";
import { Card } from "../../components/card/Card";
import { testimonialInfo } from "../../utils";
import "./Testimonials.scss";

export const Testimonials = () => {
  return (
    <div className="testimonials">
      <Slide triggerOnce>
        {testimonialInfo.map((item) => (
          <Card item={item} />
        ))}
      </Slide>
    </div>
  );
};
