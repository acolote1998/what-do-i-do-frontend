import { createFileRoute } from "@tanstack/react-router";
import Container from "../components/Container";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex justify-center items-center text-center min-h-screen">
      <Container heightvh="20" widthvw="20" />
    </div>
  );
}
