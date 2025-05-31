export type ContainerType = {
  widthvw: string;
  heightvh: string;
  children?: React.ReactNode;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
};

export type ActionButtonType = {
  widthvw: string;
  heightvh: string;
  title: string;
};
