import React from "react";
import { Button } from "../../components/button/Button";
import "./Features.scss";
export const Features = () => {
  return (
    <section className="features">
      <div className="features__wrapper">
        <h1 className="features__wrapper--title">All your files in one secure location, accessible anywhere.</h1>
        <span className="features__wrapper--subtitle">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </span>
        {/* <button>Get Started</button> */}
        <Button label="Get Started"/>
      </div>
    </section>
  );
};
