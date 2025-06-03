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

export type DecisionsType = {
  id?: string;
  title: string;
  description: string;
  option1: string;
  option2: string;
  users_votes_1: string[];
  users_votes_2: string[];
  open: boolean;
};
