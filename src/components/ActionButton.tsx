import type { ActionButton } from "../types/types";

const ActionButton = ({ heightvh, widthvw, title }: ActionButton) => {
  return (
    <div
      style={{
        border: "1px solid var(--main-button-border)",
        color: "var(--main-button-text)",
        backgroundColor: "var(--main-button)",
        width: `${widthvw}vw`,
        height: `${heightvh}vh`,
      }}
      className="font-bold tracking-wider rounded-lg flex items-center justify-center align-middle"
    >
      {title}
    </div>
  );
};

export default ActionButton;
