import React from "react";
import styles from "./fluid-ball.module.scss";

const FluidBall: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={`${styles.fluidBall} ${className}`}></div>;
};

export default FluidBall;
