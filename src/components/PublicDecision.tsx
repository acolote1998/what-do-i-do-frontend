import Container from "./Container";
import type { DecisionsType } from "../types/types";
import ActionButton from "./ActionButton";
import { useNavigate } from "@tanstack/react-router";
const PublicDecision = ({ open, title, description, id }: DecisionsType) => {
  const navigate = useNavigate();
  return (
    <>
      {open && (
        <>
          <div className="m-1">
            <h1
              style={{ color: "var(--app-titles)" }}
              className="text-3xl"
            ></h1>
            <Container position="relative" heightvh="20" widthvw="80">
              <h2
                style={{ color: "var(--app-titles)" }}
                className="cursor-pointer text-xl font-bold"
              >
                {title}
              </h2>
              <div
                style={{ border: "1px solid var(--divs-border)" }}
                className="
              p-1 w-[70vw] h-[10vh] rounded-lg overflow-clip"
              >
                <p className="h-[10vh][mask-image:linear-gradient(to_bottom,black,transparent)] ">
                  {description}
                </p>
              </div>
              <div
                className="cursor-pointer flex gap-2 absolute bottom-2"
                onClick={() => {
                  navigate({ to: `/decisions/${id}` });
                }}
              >
                <ActionButton widthvw="25" heightvh="4" title="See more" />
              </div>
            </Container>
          </div>
        </>
      )}
    </>
  );
};

export default PublicDecision;
