import { createFileRoute } from "@tanstack/react-router";
import Container from "../components/Container";
import ActionButton from "../components/ActionButton";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex justify-center items-center text-center min-h-screen">
      <Container heightvh="40" widthvw="80">
        <h1 style={{ color: "var(--app-titles)" }} className="text-6xl">
          Holis
        </h1>
        <ActionButton heightvh="5" title="Button" widthvw="25"></ActionButton>
        <ActionButton heightvh="5" title="Button" widthvw="25"></ActionButton>
        <div className="flex">
          <div
            className="w-[10vw] h-[2vh]"
            style={{ backgroundColor: "var(--divs-vote-1)" }}
          ></div>
          <div
            className="w-[30vw] h-[2vh]"
            style={{ backgroundColor: "var(--divs-vote-2)" }}
          ></div>
        </div>
      </Container>
    </div>
  );
}
