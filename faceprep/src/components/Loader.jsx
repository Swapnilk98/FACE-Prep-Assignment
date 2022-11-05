import React, { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
const Loader = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return (
    <RotatingLines
      strokeColor="blue"
      strokeWidth="5"
      animationDuration="0.85"
      width="96"
      visible={true}
    />
  );
};
export default Loader;
