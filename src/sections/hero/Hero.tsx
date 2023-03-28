import React from "react";
import { bgCurvyDesktop, bgCurvyMobile, illustrationIntro } from "../../assets";
import { useWidth } from "../../hooks/useWidth";
import "./Hero.scss";

export const Hero = () => {
  const { width } = useWidth();

  return (
    <section className="hero">
      <img
        src={illustrationIntro}
        alt="illustrationIntro"
        className="illustration"
      />
      <img
        src={width > 700 ? bgCurvyDesktop : bgCurvyMobile}
        alt="bgCurvyMobile"
        className="hero__bg"
      />
    </section>
  );
};
