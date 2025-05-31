import { createFileRoute } from "@tanstack/react-router";
import Container from "../components/Container";
import ActionButton from "../components/ActionButton";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex justify-center items-center text-center min-h-screen">
      <Container heightvh="10" widthvw="80">
        <ActionButton heightvh="5" title="Button" widthvw="25"></ActionButton>
        <ActionButton heightvh="5" title="Button" widthvw="25"></ActionButton>
      </Container>
    </div>
  );
}
