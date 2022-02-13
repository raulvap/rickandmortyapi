import React, { useEffect, useState } from "react";

const isWindowClient = typeof window === "object";

const useWindowSize = () => {
  const [height, setHeight] = useState(350);
  const [width, setWidth] = useState(
    isWindowClient ? window.innerWidth : undefined
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    if (isWindowClient) {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isWindowClient, setWidth]);

  return {
    width,
    height,
  };
};

export default useWindowSize;
