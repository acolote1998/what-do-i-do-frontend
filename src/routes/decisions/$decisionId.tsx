import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/decisions/$decisionId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/decisions/$decisionId"!</div>;
}
