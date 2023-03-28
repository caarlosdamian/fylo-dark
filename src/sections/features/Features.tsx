import React from "react";
import { Button } from "../../components/button/Button";
import { featuresInfo } from "../../utils";
import { Slide } from "react-awesome-reveal";
import "./Features.scss";

export const Features = () => {
  return (
    <section className="features" id="features">
      <div className="features__wrapper">
        <h1 className="features__wrapper--title">
          All your files in one secure location, accessible anywhere.
        </h1>
        <span className="features__wrapper--subtitle">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </span>
        <Button label="Get Started" />
      </div>
      <div className="features__grid">
        {featuresInfo.map((item) => (
          <Slide triggerOnce>
            <div className="feature">
              <img src={item.img} alt={item.img} className="feature__img" />
              <h2 className="feature__title">{item.title}</h2>
              <span className="feature__desc">{item.desc}</span>
            </div>
          </Slide>
        ))}
      </div>
    </section>
  );
};
