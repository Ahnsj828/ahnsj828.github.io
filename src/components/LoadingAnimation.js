// src/components/LoadingAnimation.js
import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/data/Animation - 1723397476967.json";
import "../index.css";
import "../GlobalStyles";

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default LoadingAnimation;
