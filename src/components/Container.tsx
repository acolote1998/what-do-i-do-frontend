import type { ContainerType } from "../types/types";
const Container = ({ heightvh, widthvw }: ContainerType) => {
  return (
    <div
      style={{
        border: "1px solid var(--divs-border)",
        color: "var(--divs-text)",
        backgroundColor: "var(--divs-bg)",
        width: `${widthvw}vw`,
        height: `${heightvh}vh`,
      }}
      className="rounded-lg"
    >
      Container
    </div>
  );
};

export default Container;
