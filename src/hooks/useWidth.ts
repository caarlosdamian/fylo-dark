import { useEffect, useState } from "react";

export const useWidth = () => {
  const [screen, setScreen] = useState({
    width: 1440,
    heigth: 900,
  });
  const onResize = () => {
    setScreen({
      ...screen,
      width: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return screen;
};
