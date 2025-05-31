import { useState } from "react";
import type { ActionButtonType } from "../types/types";

const ActionButton = ({ heightvh, widthvw, title }: ActionButtonType) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    width: `${widthvw}vw`,
    height: `${heightvh}vh`,
    border: `1px solid var(${isHovered ? "--main-button-border-hover" : "--main-button-border"})`,
    color: `var(${isHovered ? "--main-button-text-hover" : "--main-button-text"})`,
    backgroundColor: `var(${isHovered ? "--main-button-hover" : "--main-button"})`,
    transition: "background-color 0.3s, border-color 0.3s, color 0.3s",
  };

  return (
    <div
      style={styles}
      className="cursor-pointer font-bold tracking-wider rounded-lg flex items-center justify-center align-middle"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title}
    </div>
  );
};

export default ActionButton;
