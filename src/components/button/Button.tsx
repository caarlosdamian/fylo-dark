import React from "react";
import "./Button.scss";

export const Button = ({ label }: { label: string }) => {
  return <button className="btn">{label}</button>;
};
