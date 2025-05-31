import type { ContainerType } from "../types/types";

const Container = ({
  heightvh,
  widthvw,
  children,
  position,
}: ContainerType) => {
  return (
    <div
      style={{
        border: "1px solid var(--divs-border)",
        color: "var(--divs-text)",
        backgroundColor: "var(--divs-bg)",
        width: `${widthvw}vw`,
        height: `${heightvh}vh`,
        position: `${position}`,
      }}
      className="flex flex-col items-center justify-evenly rounded-lg"
    >
      {children}
    </div>
  );
};

export default Container;
